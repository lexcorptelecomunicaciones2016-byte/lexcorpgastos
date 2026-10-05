# LEXCORP · Gastos, Nómina y Préstamos PRO

## Usuarios de acceso
- ADMON — Administrador.
- Miguel Arias — usuario operativo. Correo Firebase esperado: `miguel@lexcorp.app`.
- Fredy Villamil — usuario operativo. Reutiliza `tecn1@lexcorp.app`.

**Santiago Villamil NO tiene usuario de acceso.** Solo aparece como beneficiario en Préstamos y como colaborador en Nómina.

## Módulos
- Gastos diarios con factura y comprobante.
- Préstamos: Miguel Arias, Fredy Villamil y Santiago Villamil.
- Pago de nómina con medios de pago, periodo, bonificaciones, descuentos y comprobante.
- Historial en tiempo real.
- Contabilidad consolidada y exportación Excel.
- Respaldo opcional automático a Google Drive.

## Permisos
- Usuarios operativos: crear y consultar sus propios movimientos.
- ADMON: ver todo, editar, eliminar, registrar abonos, exportar y configurar Drive.

## Firebase
Los movimientos de esta app usan `finanzas/GASTOS/...`, separado del proyecto FTTH.
Revisa `FIRESTORE_RULES_CONTABILIDAD.txt` antes de publicar.

## Actualización: deudas a técnicos y correcciones históricas

Esta versión agrega el módulo **Deudas a técnicos**, integra todos los gastos históricos de Fredy y reclasifica el pago de $400.000 de Fredy como nómina del trabajo Banco de la República. Antes de publicar, usa las reglas de `FIRESTORE_RULES_COMPLETAS.txt`.
