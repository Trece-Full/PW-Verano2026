# Comandos de Git

**1- `git init`:**
Crea un nuevo repositorio Git local transformando el directorio actual en una carpeta rastreada.

**2- `git status`:**
Informa qué archivos han sido modificados, cuáles están listos para guardarse y cuáles no están siendo rastreados.

**3- `git add <archivo>`:**
Mueve un archivo modificado específico al área de preparación (Staging Area).

**4- `git add .`:**
Añade de forma masiva absolutamente todos los archivos nuevos, modificados o eliminados del directorio actual al Staging Area.

**5- `git commit -m "mensaje"`:**
Toma una fotografía instantánea (snapshot) de los cambios que pusiste en el Staging Area y la graba permanentemente en el historial local.

**6- `git log`:**
Despliega una lista cronológica inversa de todos los commits realizados en la rama actual, mostrando autor, fecha y el código de identificación (Hash SHA-1).

**7- `git clone <url>`:**
Descarga un proyecto completo que ya existe en la nube (como GitHub o GitLab) junto con todo su historial de commits.

**8- `git config --global user.name "Nombre"`:**
Asocia tu nombre de pila o usuario a todas las confirmaciones que realices en tu computadora.

**9- `git config --global user.email "correo@ejemplo.com"`:**
Registra tu dirección de correo electrónico en la configuración global de Git.

**10- `git commit --amend`:**
Abre el editor de texto para modificar el mensaje del último commit realizado o para inyectarle cambios que olvidaste agregar.

**11- `git log --oneline`:**
Compacta el historial de Git mostrando cada commit en una sola línea de texto con su versión corta del Hash y su mensaje.

**12- `git diff`:**
Compara línea por línea las modificaciones de tus archivos actuales que aún no han sido enviadas al área de preparación.

**13- `git branch`:**
Muestra la lista completa de todas las ramas locales disponibles y resalta con un asterisco y color la rama en la que estás parado.

**14- `git branch <nombre-rama>`:**
Crea una línea de tiempo paralela nueva basada exactamente en el commit donde te encuentras en ese momento.

**15- `git checkout <nombre-rama>`:**
Te desplaza físicamente de la rama actual a la rama especificada, actualizando los archivos de tu carpeta de trabajo.

**16- `git switch -c <nombre-rama>`:**
Es un comando moderno abreviado que crea una rama nueva y te cambia a ella inmediatamente en un solo paso.

**17- `git merge <nombre-rama>`:**
Fusiona la historia y los archivos de la rama especificada dentro de la rama en la que te encuentras actualmente.

**18- `git branch -d <nombre-rama>`:**
Elimina una rama local que ya no necesitas, siempre y cuando sus cambios ya hayan sido fusionados con éxito en otra rama.

**19- `git push origin <nombre-rama>`:**
Sube tus commits locales almacenados en tu computadora hacia el servidor remoto (como GitHub) bajo la rama indicada.

**20- `git pull`:**
Descarga las últimas actualizaciones del repositorio remoto y las fusiona inmediatamente en tu rama local actual.
