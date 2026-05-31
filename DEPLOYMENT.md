# Despliegue de Dr Bent Web

Este proyecto está preparado para ser desplegado fácilmente en Vercel o Firebase Hosting.

## Opción 1: Despliegue Automático en Vercel (Recomendado)

Vercel ofrece integración continua directa con GitHub. Cada vez que hagas `push` a la rama `main`, Vercel construirá y publicará la nueva versión automáticamente.

1.  Entrar a [Vercel](https://vercel.com).
2.  Hacer clic en **Add New...** -> **Project**.
3.  Importar el repositorio desde GitHub: `alvinbent/Alvin-Bent-Consultorio`.
4.  Vercel debería detectar automáticamente que es un proyecto **Vite** o **React**.
5.  **Configuraciones clave**:
    *   **Framework Preset:** Vite (o dejar que Vercel lo autodetecte).
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
6.  **Variables de entorno (Environment Variables)**:
    *   Si tienes configurado Firebase u otros servicios secretos, asegúrate de agregar las variables definidas en `.env.example` con sus valores reales de producción en esta sección de Vercel antes de desplegar.
7.  Hacer clic en **Deploy**.
8.  Una vez desplegado, puedes configurar un **Dominio Personalizado** (ej: dralvinbent.com) en la configuración del proyecto en Vercel (Settings -> Domains).

Cada `git push origin main` posterior activará un nuevo despliegue automático.

## Opción 2: Despliegue con Firebase Hosting

Si prefieres mantener todo el ecosistema en Google/Firebase.

1.  Instalar Firebase CLI si no lo tienes:
    `npm install -g firebase-tools`
2.  Iniciar sesión:
    `firebase login`
3.  Inicializar Firebase en el proyecto (si no está hecho):
    `firebase init hosting`
    *   Selecciona tu proyecto de Firebase creado en la consola.
    *   Directorio público: `dist`
    *   Configurar como single-page app (reescribir URLs a /index.html): `Yes`
    *   Configurar despliegues automáticos con GitHub: `Yes` (opcional, requerirá autenticación con GitHub).
4.  Hacer el build local:
    `npm run build`
5.  Desplegar manualmente:
    `firebase deploy --only hosting`

Asegúrate de tener un archivo `.firebaserc` y `firebase.json` correctamente configurados si eliges esta ruta.
