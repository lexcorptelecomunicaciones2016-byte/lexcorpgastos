# Activar respaldo automático en Google Drive

Cuenta que debe hacer el despliegue: **lexcorptelecomunicaciones2016@gmail.com**

1. Inicia sesión en Google con esa cuenta.
2. Entra a https://script.google.com y crea un **Proyecto nuevo**.
3. Borra el contenido de `Code.gs` y pega todo el archivo `GOOGLE_APPS_SCRIPT_DRIVE.gs` incluido en este paquete.
4. En **Configuración del proyecto**, establece la zona horaria en **America/Bogota**.
5. Pulsa **Implementar > Nueva implementación**.
6. Tipo: **Aplicación web**.
7. Ejecutar como: **Yo**.
8. Quién tiene acceso: **Cualquier persona**.
9. Autoriza los permisos de Drive y Sheets.
10. Copia la URL que termina en `/exec`.
11. Entra a la app LEXCORP con ADMON > pestaña **Drive**.
12. Pega la URL, deja el token `LEXCORP-GASTOS-2026`, activa el respaldo y guarda.
13. Pulsa **Enviar prueba**.

La cuenta de Drive recibirá automáticamente:
- Carpeta `LEXCORP_CONTABILIDAD_PRO`.
- Subcarpetas por año, mes y tipo de movimiento.
- Facturas, comprobantes y soportes en JPG.
- Un JSON por movimiento para auditoría.
- Una hoja `LEXCORP_CONTABILIDAD_MASTER` con el historial consolidado.

Si cambias el token en el Apps Script, usa exactamente el mismo token en la pestaña Drive de la app.
