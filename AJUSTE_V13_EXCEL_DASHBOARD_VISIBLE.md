# Ajuste V13

- Los dos Excel originales cargados por el usuario quedan como fuente histórica maestra.
- El Dashboard no depende de que Firestore ya tenga todos los registros: siempre combina Excel + Firebase.
- Dashboard Madrid y Dashboard FTTH Tenjo filtran de forma independiente.
- Se excluye el legado hist_1 de gastos para evitar mostrar la ARL de Miguel como gasto; se conserva como cuenta por pagar hist_57.
- Se reemplazaron dentro de /archivos los dos Excel originales por las copias recién cargadas.
