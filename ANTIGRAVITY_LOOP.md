# 🔄 ANTIGRAVITY LOOP — Dr. Alvin Bent Web

Sistema de control de versiones, sincronización y loop iterativo para el proyecto.

---

## 1. Resumen del Proyecto
- **Nombre:** Dr Bent Web
- **Especialidad:** Ortopedia, Hombro, Rodilla y Medicina Deportiva
- **Origen del Diseño:** Google Stitch
- **Framework:** React + Vite

---

## 2. Sincronización con GitHub
Este proyecto se mantiene sincronizado con GitHub utilizando la Skill de sincronización y el script automatizado.

### Flujo de Sincronización
Para guardar tus cambios locales en GitHub de forma rápida y segura, ejecuta:
```bash
npm run sync:github
```

Esto realizará automáticamente las siguientes tareas:
1. Rebasará tu rama local con los últimos cambios remotos.
2. Compilará el proyecto localmente (`npm run build`) para verificar que no haya errores.
3. Agregará todos los cambios y creará un commit.
4. Hará un push directo a la rama `main` de GitHub.

**Importante:** Nunca hagas `force push` sin justificación y evita subir archivos sensibles (como claves en `.env`).
