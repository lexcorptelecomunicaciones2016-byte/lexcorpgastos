# V12 · Corrección real de dashboards y carga histórica

- Corrige el error visual donde el botón FTTH Tenjo podía quedar activo mientras el contenido seguía mostrando Madrid.
- Fuerza que Dashboard Madrid = Proyecto FTTH Madrid y Dashboard FTTH Tenjo = FTTH Tenjo.
- Carga los datos históricos integrados como respaldo inmediato mientras Firebase sincroniza.
- Si Firestore devuelve datos, la vista cambia automáticamente a Firebase en tiempo real.
- Si una regla de Firestore bloquea una colección, el dashboard no queda en $0: muestra el histórico integrado y avisa.
- En cada inicio ADMON se reconcilia el histórico y las correcciones críticas.
- Miguel Arias ARL queda como cuenta por pagar de $50.000, no como gasto ni préstamo entregado.
- Incluye FIRESTORE_RULES_V12.txt con la regla de deudas_tecnicos.
