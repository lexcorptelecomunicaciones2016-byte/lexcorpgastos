# LEXCORP Contabilidad PRO V6

- Gina Ruiz: cuenta por pagar histórica de $1.000.000 por préstamo para inicio del proyecto.
- Fredy Villamil / FTTH Tenjo: obligación total registrada de $877.158, abono histórico de $648.158 y saldo pendiente de $229.000.
- Los registros provenientes de `Gastos-Fredy-1,500,000` y `Gastos-Freddy` se normalizan como `Gastos generales - Fredy`.
- El módulo se presenta como **Deudas / cuentas por pagar**, permitiendo técnicos y terceros (incluida Gina Ruiz), sin cambiar la colección Firestore existente `deudas_tecnicos` para mantener compatibilidad.
- La carga histórica usa versión `fontana3_v6_deudas_gina_fredy` y actualiza los documentos existentes al primer ingreso de ADMON.

## Control financiero adicional
- Los reembolsos/abonos de cuentas por pagar se descuentan del flujo operativo para reflejar la salida real de caja.
- El selector de cuentas por pagar permite Fontana 3, FTTH Tenjo y Proyecto FTTH Madrid.
- Gina Ruiz se incluye únicamente como acreedora en cuentas por pagar; no se agrega como usuario del sistema.
