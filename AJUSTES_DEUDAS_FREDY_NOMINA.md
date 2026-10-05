# Ajustes LEXCORP Contabilidad PRO

## Cambios aplicados

- Nuevo módulo **Deudas a técnicos** para registrar dinero que un técnico paga o adelanta con recursos propios y que LEXCORP debe reembolsarle.
- Campos: proyecto, técnico, fecha, valor, categoría, medio usado, concepto/material/motivo, proveedor, referencia, observaciones y soporte.
- ADMON puede registrar, editar, eliminar y registrar abonos/reembolsos.
- Miguel y Fredy pueden consultar todo en tiempo real, sin editar.
- El movimiento **MIGUEL ARIAS PARAFISCALES $50.000** pasó de Préstamos a **Deuda a técnicos**, porque Miguel adelantó ese dinero y LEXCORP se lo debe.
- Se integraron las dos hojas del Excel de Fredy: `Gastos-Fredy-1,500,000` y `Gastos-Freddy`. Quedan 29 gastos históricos de Fredy por $2.130.842.
- El movimiento **Fredy Villamil $400.000** fue retirado de Préstamos y reclasificado como **Nómina**, concepto **Trabajo realizado - Banco de la República**.
- El Excel exportado por la app ahora incluye una hoja **Deudas_Tecnicos**.
- La base histórica incluida en el ZIP también fue actualizada.

## Importante al publicar

Antes de usar el nuevo módulo, reemplaza las reglas actuales de Firestore por el contenido de `FIRESTORE_RULES_COMPLETAS.txt` y pulsa **Publicar**.
Luego sube esta nueva versión a Netlify.
