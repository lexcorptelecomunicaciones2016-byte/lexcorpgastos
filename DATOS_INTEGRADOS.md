# Base histórica integrada

Esta versión contiene dentro del propio `index.html` los 63 movimientos históricos provenientes de `Gastos_Fontana III_v2.xlsx`.

- Se cargan automáticamente a Firestore en el primer ingreso de ADMON.
- Usa IDs `hist_#`, por lo que no duplica registros.
- Si ya existen, no vuelve a escribirlos en cada ingreso.
- Los movimientos quedan disponibles en tiempo real en PC y celular.

Totales históricos de referencia:
- Ingresos: $3.716.000
- Gastos: $3.323.812
- Nómina: $670.000
- Préstamos/anticipos: $1.370.000
