# ERRORS — Dr Bent Web

Este archivo registra los errores encontrados durante el desarrollo y configuración del proyecto, así como sus soluciones correspondientes.

## 1. Error de Autenticación SSH con GitHub (Permission denied publickey)

### Descripción
Al intentar probar la conexión SSH con GitHub (`ssh -T git@github.com`) o realizar un `git push`, se genera el siguiente error:
```
git@github.com: Permission denied (publickey).
```

### Causa
El entorno local actual no tiene una clave SSH configurada en GitHub, o el agente SSH local no tiene cargada la clave correspondiente con acceso de escritura al repositorio `git@github.com:alvinbent/Alvin-Bent-Consultorio.git`.

### Solución / Pasos para el Usuario
1.  **Verificar si existen claves SSH locales:**
    Abre una terminal y ejecuta:
    ```bash
    ls -l ~/.ssh
    ```
    Si no existen archivos como `id_rsa` o `id_ed25519`, debes generar una nueva llave.

2.  **Generar una nueva clave SSH (si no existe):**
    ```bash
    ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"
    ```
    Presiona Enter para aceptar la ruta predeterminada y define una contraseña si lo deseas.

3.  **Iniciar el agente SSH y agregar la clave:**
    En PowerShell (como Administrador):
    ```powershell
    Start-Service ssh-agent
    ssh-add ~/.ssh/id_ed25519
    ```

4.  **Agregar la clave pública a tu cuenta de GitHub:**
    *   Copia el contenido de tu clave pública:
        ```bash
        cat ~/.ssh/id_ed25519.pub
        ```
    *   Ve a GitHub -> Settings -> SSH and GPG keys -> New SSH Key.
    *   Pega el contenido y guarda.

5.  **Probar la conexión:**
    ```bash
    ssh -T git@github.com
    ```
    Deberías ver un mensaje como: `Hi alvinbent! You've successfully authenticated...`

---

## 2. Ejecución de Scripts deshabilitada en PowerShell

### Descripción
Al intentar ejecutar comandos como `npm install` o el script de sincronización, se genera un error de seguridad:
```
No se puede cargar el archivo ... porque la ejecución de scripts está deshabilitada en este sistema.
```

### Solución
Para resolverlo de forma persistente o temporal, ejecuta comandos a través de CMD con `cmd /c` o cambia la política de ejecución en PowerShell como Administrador:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
