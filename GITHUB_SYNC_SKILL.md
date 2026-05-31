# Skill de sincronización GitHub — Dr Bent Web

Repositorio:
https://github.com/alvinbent/Alvin-Bent-Consultorio.git (HTTPS)

Objetivo:
Mantener el proyecto Dr Bent Web sincronizado con GitHub después de cada cambio importante.

Flujo antes de modificar:
1. git status
2. git pull origin main --rebase
3. Revisar ANTIGRAVITY_LOOP.md
4. Revisar TODO.md
5. Revisar CHANGELOG.md

Flujo después de modificar:
1. npm run build
2. git status
3. git add .
4. git commit -m "Descripción clara del cambio"
5. git push origin main
6. Actualizar CHANGELOG.md
7. Actualizar TODO.md si aplica

Reglas:
- No subir .env.
- No subir node_modules.
- No hacer force push sin justificación.
- No borrar archivos de Stitch.
- No alterar diseño visual sin indicación.
- No dejar botones rotos.
- No publicar si el build falla.
- No publicar si hay errores críticos en consola.
