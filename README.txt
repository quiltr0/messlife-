MESSLIFE — VERSIÓN 31

Esta versión toma la v30 y la deja preparada para distribución como aplicación web/PWA.

LO QUE CAMBIÓ
- PWA con manifest, scope e iconos.
- Botón "INSTALAR MESSLIFE" cuando el navegador ofrece instalación.
- Service worker más robusto: guarda la interfaz y recursos locales para uso offline.
- Preparada para hosting estático con HTTPS.
- Se mantienen todas las mini apps y su almacenamiento local.
- Exportar/Importar carrera sigue disponible para mover una carrera entre dispositivos.

POR QUÉ EL ZIP SOLO NO BASTA
El error 127.0.0.1 / ERR_CONNECTION_REFUSED que viste ocurre cuando el navegador intenta conectarse a un servidor local que ya no está ejecutándose. Un ZIP no puede levantar ese servidor por sí solo.

PARA USARLA ENTRE CELULARES
La solución definitiva es publicar esta carpeta en un hosting web estático con HTTPS. Entonces tendrás una dirección web estable que puedes enviar por WhatsApp. El organizador abre esa dirección y puede instalar MESSLIFE en su teléfono.

PARA PROBARLA LOCALMENTE EN UN COMPUTADOR
- Windows: ABRIR_MESSLIFE.bat
- macOS/Linux: ABRIR_MESSLIFE.command
Estos lanzadores requieren Python 3.

DATOS
Los datos se guardan localmente en el dispositivo/navegador. Para cambiar de dispositivo:
1. Exportar carrera en el dispositivo original.
2. Abrir MESSLIFE en el nuevo dispositivo.
3. Importar carrera.

El bloqueo de datos es local y no se exporta.

IMPORTANTE
No se modificó la lógica de Jugadores, Checkpoints, Manifiesto, Riesgos ni Dados; el cambio de esta versión está enfocado en distribución, instalación y funcionamiento offline.
