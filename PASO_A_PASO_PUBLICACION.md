# Publicación LEXCORP Contabilidad PRO

## 1. Firestore
En Firebase > Firestore > Reglas, reemplazar las reglas actuales por el contenido completo de `FIRESTORE_RULES_COMPLETAS.txt` y pulsar Publicar.

## 2. Perfil de Fredy
En Firestore > usuarios > documento UID de Fredy, comprobar:
- activo = true (boolean)
- usuario = FREDY (string)
- nombre = Fredy Villamil (string)
- rol = tecnico (string)

No es necesario cambiar a Fredy a rol administrador.

## 3. Netlify
Crear un sitio nuevo, separado de FTTH. Nombre recomendado: `lexcorpgastos`.
Subir la carpeta completa descomprimida de esta versión mediante Deploy manually.

## 4. Google Cloud API Key
En APIs y servicios > Credenciales > clave usada por Firebase Web:
- Si Restricciones de aplicaciones está en Ninguno: no agregar nada.
- Si está en Sitios web: agregar `https://lexcorpgastos.netlify.app/*` (ajustar si el nombre final es otro).

## 5. Firebase Authentication
Firebase > Authentication > Configuración > Dominios autorizados:
Agregar `lexcorpgastos.netlify.app` (o el dominio final real).

## 6. Usuarios
ADMON: usuario administrador existente.
FREDY: usa el usuario existente asociado a Fredy.
MIGUEL: si se requiere, crear `miguel@lexcorp.app` en Authentication y su documento en `usuarios/{UID}`.
Santiago Villamil: no necesita login; solo aparece como beneficiario de préstamo/nómina.

## 7. Prueba
- Abrir ADMON en PC: debe ver y administrar todo.
- Abrir Fredy en otro equipo: debe ver todo en tiempo real, con etiqueta Solo lectura y sin opciones de crear/editar/eliminar.
- Crear un préstamo desde ADMON y usar el botón Generar. El navegador abrirá el comprobante A4 y permitirá Guardar como PDF.
