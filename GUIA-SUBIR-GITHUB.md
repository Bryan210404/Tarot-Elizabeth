# 🚀 Guía Completa: Subir Proyecto a GitHub Pages desde Cero

## 📋 Paso 1: Crear Nuevo Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configura así:
   - **Repository name**: `tarot-elizabeth` (o el nombre que prefieras)
   - **Description**: "Página web profesional de El Tarot de Elizabeth"
   - ✅ **Public** (debe ser público para GitHub Pages gratis)
   - ❌ **NO** marques "Add a README file"
   - ❌ **NO** marques "Add .gitignore"
   - ❌ **NO** selecciones ninguna licencia
4. Haz clic en **"Create repository"**

## 📂 Paso 2: Preparar tu Proyecto Local

Abre PowerShell y ejecuta estos comandos **UNO POR UNO**:

### 2.1 Ir a la carpeta del proyecto
```powershell
cd C:\Users\usuario\.gemini\antigravity\scratch\tarot-elizabeth
```

### 2.2 Inicializar Git (si no está inicializado)
```powershell
git init
```

### 2.3 Configurar tu usuario Git (si no lo has hecho antes)
```powershell
git config --global user.name "TU-NOMBRE"
git config --global user.email "tu-email@ejemplo.com"
```

## 📤 Paso 3: Subir Archivos a GitHub

### 3.1 Agregar todos los archivos
```powershell
git add .
```

### 3.2 Hacer el primer commit
```powershell
git commit -m "Primera versión - El Tarot de Elizabeth"
```

### 3.3 Renombrar la rama a main
```powershell
git branch -M main
```

### 3.4 Conectar con tu repositorio de GitHub
**⚠️ IMPORTANTE: Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub**

```powershell
git remote add origin https://github.com/TU-USUARIO/tarot-elizabeth.git
```

### 3.5 Subir los archivos
```powershell
git push -u origin main
```

**Nota:** Te pedirá tus credenciales de GitHub. Si tienes autenticación de dos factores, necesitarás usar un Personal Access Token en lugar de tu contraseña.

## 🌐 Paso 4: Activar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/tarot-elizabeth`
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral izquierdo, busca **"Pages"**
4. En **"Source"** (Fuente):
   - Branch: Selecciona **main**
   - Folder: Selecciona **/ (root)**
5. Haz clic en **"Save"**
6. ¡Espera 2-3 minutos!

## ✅ Paso 5: Ver tu Página Publicada

Tu página estará disponible en:
```
https://TU-USUARIO.github.io/tarot-elizabeth/
```

**⏱️ IMPORTANTE:**
- Espera 2-3 minutos después de activar Pages
- La primera vez puede tardar hasta 5 minutos
- Verás un mensaje verde con la URL cuando esté lista

## 📱 Paso 6: Probar en Móvil

1. Abre la URL en tu móvil
2. **Usa modo incógnito** la primera vez (para evitar caché)
3. Las imágenes deberían aparecer correctamente

## 🔧 Si Necesitas Hacer Cambios Después

Cuando hagas cambios en tu proyecto local:

```powershell
cd C:\Users\usuario\.gemini\antigravity\scratch\tarot-elizabeth
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios aparecerán en 1-2 minutos en tu página.

## 📋 Estructura de Archivos que se Subirán

```
tarot-elizabeth/
├── index.html              ✅
├── style.css               ✅
├── script.js               ✅
├── header-bg.jpg           ✅
├── images/                 ✅
│   ├── tarot-back.png     ✅
│   ├── tarot-love.png     ✅
│   └── tarot-yesno.png    ✅
├── .nojekyll              ✅ (importante para GitHub Pages)
├── .gitignore             ✅
└── README.md              ✅
```

## ⚠️ Problemas Comunes

### Error: "git not found"
- Instala Git: https://git-scm.com/download/win
- Reinicia PowerShell después de instalar

### Error de autenticación
- Usa un Personal Access Token en lugar de contraseña
- Créalo en: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
- Permisos necesarios: `repo` (todos)

### Las imágenes no aparecen
- Espera 3-5 minutos después del primer push
- Abre en modo incógnito en tu móvil
- Verifica que la carpeta `images/` se haya subido correctamente

## 🎯 Resumen de Comandos (Copia y Pega)

```powershell
# 1. Ir a la carpeta
cd C:\Users\usuario\.gemini\antigravity\scratch\tarot-elizabeth

# 2. Inicializar Git
git init

# 3. Agregar archivos
git add .

# 4. Hacer commit
git commit -m "Primera versión - El Tarot de Elizabeth"

# 5. Renombrar rama
git branch -M main

# 6. Conectar con GitHub (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/tarot-elizabeth.git

# 7. Subir archivos
git push -u origin main
```

¡Eso es todo! Tu página estará en línea en pocos minutos. 🌟
