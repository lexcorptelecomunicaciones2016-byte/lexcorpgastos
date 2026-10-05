# LEXCORP Contabilidad PRO · Publicación

## 1. Firestore
1. Abre Firebase > Firestore > Reglas.
2. Conserva las reglas FTTH y las funciones `activo()` y `admin()`.
3. Elimina únicamente el bloque genérico anterior `match /finanzas/GASTOS/{coleccion}/{documento}` si existe.
4. Pega los bloques de `FIRESTORE_RULES_CONTABILIDAD_ACTUALIZADAS.txt`.
5. Pulsa **Publicar**.

No debes crear colecciones manualmente. La app crea `gastos`, `ingresos`, `prestamos` y `nomina` dentro de `finanzas/GASTOS`.

## 2. Netlify
1. Crea un sitio nuevo (separado de FTTH), por ejemplo `lexcorpgastos.netlify.app`.
2. Descomprime el ZIP y arrastra la carpeta completa en Deploy manually.
3. Espera `Site is live`.

## 3. Autorizar el dominio
1. Google Cloud > APIs y servicios > Credenciales > clave LEXCORP WEB NETLIFY.
2. Si la clave está restringida por sitios web, agrega `https://TU-SITIO.netlify.app/*` y guarda.
3. Firebase > Authentication > Configuración > Dominios autorizados: agrega `TU-SITIO.netlify.app`.

## 4. Usuarios
- ADMON: usuario administrativo existente.
- MIGUEL: requiere una cuenta Firebase Authentication `miguel@lexcorp.app` y documento en `usuarios/{UID}` con `activo:true`, `rol:"tecnico"`, `nombre:"Miguel Arias"`, `usuario:"MIGUEL"`.
- FREDY: reutiliza `tecn1@lexcorp.app` si ya corresponde a Fredy Villamil.
- Santiago Villamil NO necesita usuario; solo aparece como beneficiario de préstamo/nómina.

## 5. Importar el Excel histórico
1. Entra como ADMON.
2. Abre **Contabilidad**.
3. Pulsa **Importar base histórica Fontana 3**.
4. Confirma. La app carga los 63 movimientos consolidados del archivo suministrado.
5. La importación usa IDs fijos `hist_...`, por lo que repetirla no duplica datos.

## 6. Entradas de clientes
Solo ADMON ve **+ Entrada**. Los proyectos disponibles son:
- Proyecto FTTH Madrid
- FTTH Tenjo

Para gastos, nómina y préstamos, el proyecto/obra disponible actualmente es **Fontana 3**.
