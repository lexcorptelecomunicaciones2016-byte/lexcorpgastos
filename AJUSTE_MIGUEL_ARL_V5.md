# Ajuste V5 — Miguel Arias / ARL

- Se eliminó el movimiento histórico duplicado que mostraba $50.000 de ARL como gasto de LEXCORP.
- El registro correcto queda en **Deudas a técnicos**: **Miguel Arias prestó/pagó $50.000 de su propio dinero para ARL/parafiscales y LEXCORP se lo debe**.
- Al iniciar ADMON, la app elimina automáticamente de Firestore el documento legado `gastos/hist_1` y actualiza `deudas_tecnicos/hist_57`.
- Se mejoraron los textos de la tabla para distinguir claramente quién puso el dinero y cuánto falta por reembolsar.
