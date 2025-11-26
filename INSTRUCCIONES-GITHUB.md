# Instrucciones para Subir a GitHub Pages

## 📋 Pasos para Publicar tu Página

### 1️⃣ Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (Nuevo) o el ícono **"+"** → **"New repository"**
3. Configura tu repositorio:
   - **Repository name**: `tarot-elizabeth` (o el nombre que prefieras)
   - **Description**: "Página web profesional de El Tarot de Elizabeth"
   - **Public** (debe ser público para GitHub Pages gratis)
   - ✅ **NO** marques "Add a README file" (ya lo tenemos)
   - ✅ **NO** agregues .gitignore (ya lo tenemos)
4. Haz clic en **"Create repository"**

### 2️⃣ Inicializar Git en tu Proyecto

Abre PowerShell o Terminal en la carpeta del proyecto y ejecuta:

```powershell
cd C:\Users\usuario\.gemini\antigravity\scratch\tarot-elizabeth
git init
git add .
git commit -m "Primera versión de El Tarot de Elizabeth"
```

### 3️⃣ Conectar con GitHub

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub:

```powershell
git remote add origin https://github.com/TU-USUARIO/tarot-elizabeth.git
git branch -M main
git push -u origin main
```

**Nota**: Te pedirá tus credenciales de GitHub.

### 4️⃣ Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, busca **"Pages"**
4. En **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Haz clic en **"Save"**
6. ¡Espera 1-2 minutos!

### 5️⃣ Ver tu Página Publicada

Tu página estará disponible en:
```
https://TU-USUARIO.github.io/tarot-elizabeth/
```

## 🔄 Actualizar tu Página

Cuando hagas cambios, ejecuta:

```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios aparecerán en 1-2 minutos.

## ✅ Verificación

Tu proyecto ya está listo con:
- ✅ `index.html` - Página principal
- ✅ `style.css` - Estilos
- ✅ `script.js` - Funcionalidad
- ✅ `header-bg.jpg` - Imagen de fondo
- ✅ `images/` - Carpeta con imágenes de cartas
- ✅ `README.md` - Documentación
- ✅ `.gitignore` - Archivos a ignorar

## 🆘 Problemas Comunes

**Error: "git not found"**
- Instala Git desde: https://git-scm.com/download/win

**Error de autenticación**
- Usa un Personal Access Token en lugar de contraseña
- Genera uno en: GitHub → Settings → Developer settings → Personal access tokens

**La página no se ve**
- Espera 2-5 minutos después de activar Pages
- Verifica que el repositorio sea público
- Revisa que la rama sea "main" en la configuración de Pages

## 📞 Contacto

Si necesitas ayuda, revisa la [documentación oficial de GitHub Pages](https://docs.github.com/es/pages)
