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


VERSIÓN 32 — VISOR DEL MANIFIESTO
- Nueva mini app debajo de Riesgos y junto a Dados.
- Muestra automáticamente partida, checkpoints y meta desde messlife_checkpoints.
- En móvil usa una interfaz optimizada para horizontal y solicita al usuario girar el teléfono si está en vertical.
- En PC mantiene formato normal.
- El temporizador comienza automáticamente al entrar: 1:00 y baja hasta 0:00.
- Cada nueva entrada a la mini app reinicia el temporizador a 1:00.
- La mini app no modifica ni reinicia los datos de Checkpoints.


VERSIÓN 33 — ORIENTACIÓN DEL VISOR
- El Visor del Manifiesto queda configurado como aplicación de orientación landscape.
- La PWA solicita orientación horizontal al abrirse.
- Se eliminó el comportamiento anterior que reorganizaba la interfaz en vertical.
- En navegadores que restringen el bloqueo de orientación, la manifest sigue solicitando landscape al instalar la PWA.


VERSIÓN 34 — VISOR LED
- El Visor del Manifiesto se simplificó a una pantalla tipo LED.
- Solo muestra partida, checkpoints, meta, temporizador y retorno al menú.
- Se eliminó la apariencia de sección/panel convencional.
- Checkpoints usan tipografía mucho más grande para lectura a distancia.
- El temporizador es deliberadamente más pequeño y secundario.


VERSIÓN 35 — ORIENTACIÓN Y VISOR RESPONSIVO
- Se elimina la orientación landscape global del manifest para que la PWA instalada no quede forzada horizontal en todas sus pantallas.
- El Visor conserva su solicitud específica de orientación horizontal cuando el navegador/sistema la permite.
- Se ajustan tamaños de chips para que números de tres dígitos y las etiquetas P/M con tres dígitos no se salgan de sus marcos en horizontal.
- El diseño vertical se conserva y el horizontal usa tamaños más contenidos.


VERSIÓN 36 — VISOR VERTICAL COMPACTO
- En móvil vertical se aprovecha el espacio superior para subir el bloque de checkpoints.
- Se reducen márgenes y separaciones para permitir más checkpoints visibles.
- El temporizador se desplaza hacia la parte inferior y queda separado del recorrido.
- Se mantiene la presentación vertical que ya funcionaba correctamente.


VERSIÓN 37 — TEMPORIZADOR FIJO
- Los checkpoints tienen scroll propio cuando son demasiados para la pantalla.
- El temporizador queda siempre visible y fijo abajo.
