const LEXCORP_TOKEN = 'LEXCORP-GASTOS-2026';
const ROOT_FOLDER = 'LEXCORP_CONTABILIDAD_PRO';
const MASTER_SHEET = 'LEXCORP_CONTABILIDAD_MASTER';

function doGet() {
  return ContentService.createTextOutput('LEXCORP Drive bridge activo');
}

function doPost(e) {
  try {
    if (!e || !e.parameter) throw new Error('Solicitud vacía');
    if (e.parameter.token !== LEXCORP_TOKEN) throw new Error('Token inválido');
    const payload = JSON.parse(e.parameter.payload || '{}');
    const tipo = String(payload.tipo || 'movimiento');
    const accion = String(payload.accion || 'crear');
    const data = payload.data || {};
    const root = getOrCreateFolder_(DriveApp.getRootFolder(), ROOT_FOLDER);
    const year = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'America/Bogota', 'yyyy');
    const month = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'America/Bogota', 'MM');
    const folder = getOrCreateFolder_(getOrCreateFolder_(getOrCreateFolder_(root, year), month), normalize_(tipo));
    const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'America/Bogota', 'yyyyMMdd_HHmmss');
    const project = normalize_(data.proyecto || 'SIN_PROYECTO');
    const base = `${stamp}_${project}_${normalize_(data.id || Utilities.getUuid())}_${normalize_(accion)}`;

    const clean = JSON.parse(JSON.stringify(data));
    const files = [];
    ['fotoFactura','fotoComprobante','soporte','comprobante'].forEach(k => {
      if (typeof clean[k] === 'string' && clean[k].startsWith('data:image/')) {
        const f = saveDataUrl_(folder, `${base}_${k}.jpg`, clean[k]);
        files.push({campo:k, fileId:f.getId(), url:f.getUrl(), nombre:f.getName()});
        clean[k] = f.getUrl();
      }
    });

    const meta = {
      recibido: new Date().toISOString(),
      cuenta: payload.cuenta || '',
      origen: payload.origen || '',
      enviado: payload.enviado || '',
      tipo,
      accion,
      data: clean,
      archivos: files
    };
    folder.createFile(`${base}.json`, JSON.stringify(meta, null, 2), MimeType.PLAIN_TEXT);
    appendMaster_(meta);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err && err.message || err)})).setMimeType(ContentService.MimeType.JSON);
  }
}

function appendMaster_(meta) {
  const files = DriveApp.getFilesByName(MASTER_SHEET);
  let ss;
  if (files.hasNext()) {
    ss = SpreadsheetApp.open(files.next());
  } else {
    ss = SpreadsheetApp.create(MASTER_SHEET);
    const f = DriveApp.getFileById(ss.getId());
    const root = getOrCreateFolder_(DriveApp.getRootFolder(), ROOT_FOLDER);
    root.addFile(f);
    DriveApp.getRootFolder().removeFile(f);
  }
  let sh = ss.getSheetByName('Movimientos');
  if (!sh) sh = ss.insertSheet('Movimientos');
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Fecha servidor','Tipo','Acción','Proyecto','Usuario','Persona/Beneficiario','Concepto/Asunto','Medio','Valor','Estado','ID','JSON']);
    sh.getRange(1,1,1,12).setFontWeight('bold');
  }
  const d = meta.data || {};
  const valor = d.valor != null ? d.valor : (d.total != null ? d.total : '');
  sh.appendRow([
    new Date(), meta.tipo, meta.accion, d.proyecto || '', d.tecnico || d.usuario || '', d.persona || '', d.concepto || d.asunto || '', d.pago || d.modo || '', valor, d.estado || '', d.id || '', JSON.stringify(d)
  ]);
}

function saveDataUrl_(folder, name, dataUrl) {
  const m = dataUrl.match(/^data:(image\/[^;]+);base64,(.+)$/);
  if (!m) throw new Error('Imagen inválida');
  const bytes = Utilities.base64Decode(m[2]);
  const blob = Utilities.newBlob(bytes, m[1], name);
  return folder.createFile(blob);
}

function getOrCreateFolder_(parent, name) {
  const it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function normalize_(s) {
  return String(s || '').trim().replace(/[^A-Za-z0-9._-]+/g,'_').replace(/^_+|_+$/g,'') || 'SIN_DATO';
}
