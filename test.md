<div align="center">

<img src="https://pbs.twimg.com/ext_tw_video_thumb/1777719263647698944/pu/img/ImENApb2inD9ZltY.jpg" width="120" style="border-radius: 16px"/>

# Shira Highlight
### *El launcher de Minecraft que debería haber existido desde siempre.*

[![Estado](https://img.shields.io/badge/estado-en%20desarrollo-blueviolet?style=for-the-badge)](#)
[![Plataforma](https://img.shields.io/badge/plataforma-Windows-0078D4?style=for-the-badge&logo=windows)](#)
[![Qt](https://img.shields.io/badge/Qt-6.10.2-41CD52?style=for-the-badge&logo=qt)](#)
[![Licencia](https://img.shields.io/badge/licencia-privada-red?style=for-the-badge)](#)

> [!WARNING]
> Shira Highlight está en desarrollo activo. Pueden existir características incompletas o inestables.

</div>

---

## ¿Qué es Shira Highlight?

Shira Highlight es un launcher de Minecraft No-Premium construido desde cero con **Qt 6 + WebEngine**, con una interfaz HTML/CSS/JS conectada a un backend en C++ de alto rendimiento.

No es un fork. No es un wrapper. Es un launcher propio, hecho con bronca y con amor, porque los launchers que existen son un desastre.

---

## ✨ Características actuales

- 🎮 **Soporte Vanilla y Fabric** — descarga e instalación automática
- ☕ **Gestión de JVM independiente** — descarga automática de Java 8, 17 y 21 según la versión
- 🚀 **Soporte GraalVM** — JVM alternativa de alto rendimiento para menos stutters y mejor frametime
- 🎨 **Sistema de Skins** — integración con MineSkin API para skins globales
- 📁 **Instalación 100% local** — sin tocar AppData, sin contaminar `.minecraft`, sin carpetas basura
- ⚡ **Descarga multihilo** — usa todos los núcleos disponibles del CPU para descargar assets
- 🖥️ **UI moderna** — interfaz frameless con soporte de resize, drag y DevTools integrados
- 🎭 **Discord RPC** — estado de actividad en tiempo real

---

## 🗺️ Roadmap

### ✅ Completado
- Gestión de JVM independiente
- Compatibilidad Fabric con instalador automático
- Sistema de skins con MineSkin
- GraalVM como JVM alternativa
- Intro animada
- Soporte multiversión

### 🔨 En progreso
- **ShiraMAX** — optimización de argumentos JVM para máximo FPS sin modloaders
- **Sistema de Skins completo** — que te vean con tu skin en servidores con SkinsRestorer

### 📋 Planificado

**Sistema de Versiones y Modloaders**
- Gestor de Modpacks — soporte de archivos CurseForge/Modrinth para usuarios No Premium

**Rendimiento**
- Soporte OpenJ9 — argumentos de lanzamiento específicos para OpenJ9
- Soporte OpenGL Mesa — uso de CPU como gráfica como fallback

**Seguridad y Cuentas**
- Cifrado DPAPI — tokens cifrados con la API de Windows, solo descifrables en la PC de origen
- Dualidad de Cuentas — soporte Premium y No Premium con lógica de lanzamiento separada

**Experiencia de usuario**
- Auto-cerrar launcher después de que Minecraft abre completamente
- Themes — launcher personalizable en colores *(confirmado)*
- Instalación local total — sin AppData, sin `.minecraft` compartido

### ❌ Descartado
- Auto-Inyección de SkinsRich — reemplazado por integración directa con MineSkin

---

## 💭 Ideas en exploración

- Animar el chat al aparecer nuevos mensajes
- Cámara más lejana en F5
- Sistema de cambio de cuentas dentro del juego
- Paleta de colores Java igual a Bedrock

---

## 🛠️ Stack técnico

| Componente | Tecnología |
|---|---|
| UI | HTML / CSS / JavaScript |
| Backend | C++20 |
| Framework | Qt 6.10.2 + WebEngine |
| Bridge | QWebChannel |
| HTTP | libcurl |
| JSON | nlohmann/json |
| Skins | MineSkin API |
| Discord | discord-rpc |
| Build | CMake 3.20+ / MSVC 2022 |

---

## 📦 Compilar desde el código fuente

**Requisitos:**
- Qt 6.10.2 con WebEngine y WebChannel
- CMake 3.20+
- MSVC 2022
- vcpkg con `curl:x64-windows` y `nlohmann-json:x64-windows`

```bash
git clone https://github.com/Shiwaru/Shira-Highlight.git
cd Shira-Highlight
# Abrir CMakeLists.txt con Visual Studio como carpeta CMake
```

---

<div align="center">

*Hecho con bronca, con amor y con demasiado café.*
*No me odien ❤️*

</div>
