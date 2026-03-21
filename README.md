<div align="center">

<!-- <img src="https://pbs.twimg.com/ext_tw_video_thumb/1777719263647698944/pu/img/ImENApb2inD9ZltY.jpg" width="120" style="border-radius: 16px"/> -->
<img href="https://shiwaru.github.io/Shira/" src="assets/minecraft_title.png" width="840" style="border-radius: 16px"/>
 
### *El launcher de Minecraft que debería haber existido desde siempre.*<br> (En desarrollo temprano)

[![Estado](https://img.shields.io/badge/Alpha-v0.1.4-blueviolet?style=for-the-badge)](https://github.com/Shiwaru/Shira-Highlight/releases)
[![Plataforma](https://custom-icon-badges.demolab.com/badge/Windows-0078D4?style=for-the-badge&logo=windows11&logoColor=white)](#)
[![Derechos](https://img.shields.io/badge/Todos%20los%20derechos%20reservados-b30c00?style=for-the-badge)](https://github.com/Shiwaru/Shira-Highlight/tree/main?tab=License-1-ov-file)
<br>
[![Pagina](https://img.shields.io/badge/Página%20Oficial-blueviolet?style=for-the-badge)](https://shiwaru.github.io/Shira/)
</div>

> [!WARNING]
> Shira Highlight está en desarrollo activo. Pueden existir características incompletas o inestables.

---

## ¿Qué es "Shira Highlight"?

Shira Highlight es la versión temprana de mi launcher de Minecraft No Premium/Premium, hecho con la idea de optimizar Minecraft Java al máximo.

No es un fork, ni es un wrapper. Es un launcher propio hecho con algo de bronca y amor, porque los launchers estandar que existen son un desastre.


  
## - Características actuales -

- Compatibilidad Vanilla hasta 1.21.11 
- Compatibilidad Fabric desde 1.19 hasta 1.21.11
- Compatibilidad Forge (Testeando) 
- Gestor de JVM automático
- GraalVM agregado como compilador de JVM
- Intro personalizada de Mojang Studios (REMOVIDO)

---

## - Características planeadas -

### Sistema de Versiones, Modloaders y Utilidades

- [X] · `Soporte Fabric` (En desarrollo) <br>
- [X] · `Soporte Forge` (En desarrollo) <br>
- [ ] · `Soporte NeoForge` (En desarrollo) <br>
- [ ] · `Soporte Quilt`<br>
- [ ] · `Gestor de Mods`<br>
- [ ] · `Gestor de Modpacks`<br>
- [ ] · `ShiraBoost`<br>
- [X] · `Discord Rich Presence (DiscordRPC)` (Desarrollando)

### - Rendimiento y Optimización - 
<!-- 
`Forge/NeoForge` > Microsoft OpenJDK<br>
`Fabric/Quilt` > GraalVM<br>
`Vanilla` > GraalVM  
-->
- [X] · `Gestión de JVM Dinámica Default`<br>
- [X] · `Soporte GraalVM`<br>
- [ ] · `Soporte Microsoft OpenJDK`<br>
- [ ] · `JVM Adaptativa`<br>
- [ ] · `Soporte OpenJ9`<br>
- [ ] · `Soporte OpenGL Mesa`<br>
- [ ] · `Soporte Shenandoah GC`<br>
- [ ] · `Soporte ZGC`<br>
- [ ] · `Garbage Collector Adaptativo`<br>
- [ ] · `Class Data Sharing` <br>
- [ ] · `Profile Guided Optimization`<br>
- [ ] · `Windows Timer Resolution`<br>
- [ ] · `ShiraProfile`<br>
- [ ] · `Sistema de Fallback Silencioso`<br>
- [ ] · `ShiraMAX`<br>

### 🔓 Seguridad y Cuentas 🔐

- [ ] · `Apartado de Cuentas Offline + Premium`
- [ ] · `Inicio de sesión de Microsoft (Premium)`<br>
- [ ] · `Cifrado DPAPI para cuentas de Microsoft (Premium)` - Para evitar que el launcher exponga cuentas a malware/virus: [Cifrado DPAPI](https://learn.microsoft.com/es-es/windows/win32/api/dpapi/nf-dpapi-cryptprotectdata)<br>
- [ ] · `Cambio de Cuentas (Offline) In-Game`<br>

### ShiraSkin - (DESCARTADO)

Concepto sin terminar.

- [ ] · `Compatibilidad con SkinsRestorer` (DESCARTADO) <br>
- [ ] · `Integración con MineSkin` (DESCARTADO)<br>
- [ ] · `Visibilidad en mundos LAN (ShiraMAX)` (DESCARTADO)<br>

### ShiraConnect

Concepto sin terminar.

- [ ] · `Sistema de invitación de mundos` (Como Minecraft Bedrock)<br>
- [ ] · `Integración con playit.gg/ZeroTier`<br>
- [ ] · `Compatibilidad con mundos LAN` - Usando playit.gg/ZeroTier<br>

### 📌 Conceptos Internos 📌

`ShiraProfile` - Detección de hardware y optimización de configuración automática<br>
`ShiraMAX` - Agente de Java que modifica el código vanilla del juego para realizar modificaciones a los componentes de render y de video de OpenGL (Aún intentando desarrollar - Pausado)<br>
`ShiraBoost` - Fabric Performance Pack:
## ShiraBoost
| Mod | Beneficio |
|-----|-----------|
| **Sodium**          | El mejor que existe de su categoría.              |
| **Iris**            | Shaders optimizados sin el costo feo de OptiFine. |
| **Lithium**         | Optimiza la lógica del cliente/servidor.          |
| **FerriteCore**     | Reduce bastante el consumo de RAM.                |
| **Starlight**       | Motor de iluminación optimizado. (Discontinuado)  |
| **ModernFix**       | Reduce tiempos de carga y consumo de memoria.     |
| **ImmediatelyFast** | Optimiza rendering de UI y entidades.             |
| **Krypton**         | Optimiza el stack de red de Minecraft.            |
| **Nvidium**         | Para GPUs Nvidia, rendering ultra optimizado.     |
| **SkinsRestorer**   | Skins visibles en servidores offline.             |

---

## (DESCARTADO)
> Inclusión de ShiraSkin (Mod) si seleccionabas NeoForge 1.21.10 o 1.21.11

---

## Ideas Varias

- Animar el chat al aparecer nuevos mensajes<br>
- Cámara más lejana en F5<br>
- Sistema de cambio de cuentas dentro del juego<br>
- Paleta de colores Java igual a Bedrock<br>

---

<div align="center">

*Hecho con bronca, amor y café.*
*No me odien ❤️*

</div>

<div align="center">
  
## ⚡Tecnologías usadas 

<img src="https://skillicons.dev/icons?i=c,cpp,qt,html,css,js,visualstudio,vscode,cmake,gradle,java" /> <br>
  
  ```
  C - C++ - Qt 6.10.2 - HTML - CCS - JavaScript - VStudio - VSCode - CMake - Gradle - Java/GraalVM/OpenJDK
  ```

</div>


Todos Los Derechos Reservados<br>
All Rights Reserved

Copyright © Shiwaru - Shira-Highlight 

> You're under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work.
> https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
