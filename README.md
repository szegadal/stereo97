# Stereo97 Website

Este proyecto es una versión mejorada del sitio web para la radio emisora Stereo97, especializada en rock boliviano e internacional. La página está construida con Next.js y presenta dos diseños alternativos.

Página original: https://www.stereo97.fm/

## 📻 Descripción

Stereo97 es una radio emisora enfocada en rock nacional e internacional, así como las últimas tendencias en rock pop, house y electrónica. Este proyecto nació como una iniciativa personal para mejorar la página web existente de la radio que marcó mi juventud.

El proyecto incluye dos versiones:
- [**src/components/layout.js**](https://main.dxx2cbonkqsz9.amplifyapp.com/): Una versión mejorada de la página actual, manteniendo la esencia original.
- [**src/pages/versions/version2.js**](https://main.dxx2cbonkqsz9.amplifyapp.com/versions/version2): Una propuesta con nuevas ideas y elementos visuales, como redes sociales en forma de vinilos en movimiento.

## ✨ Características

- **Diseño Responsivo**: Adaptado a diferentes tamaños de pantalla
- **Infinite Carousel**: Desarrollado desde cero con funcionalidad para arrastrar tarjetas
- **Reproductor Integrado**: Opción para escuchar la emisora en vivo
- **Animaciones**: Elementos visuales dinámicos como el cambio de imágenes de fondo en Layout2
- **Dos Propuestas de Diseño**: Versión conservadora y versión innovadora

## 🔧 Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- CSS Modules
- [Next Font](https://nextjs.org/docs/basic-features/font-optimization)

## 💡 Desafíos y Aprendizajes

El mayor desafío de este proyecto fue la implementación del infinite carousel desde cero, con la capacidad de arrastrar las tarjetas para navegar. Esta funcionalidad me permitió aprender sobre:

- Manejo de estados en React
- Uso de Hooks avanzados más allá de `useState` y `useEffect`
- Manipulación del DOM a través de React
- Gestión de eventos de interacción del usuario

Aunque el carousel presenta actualmente un pequeño glitch al pasar las tarjetas (vuelve bruscamente al estado inicial), fue una valiosa oportunidad de aprendizaje. Hoy en día, implementaría esta funcionalidad utilizando componentes de [shadcn/ui](https://ui.shadcn.com/) para una experiencia más pulida.

## 📸 Capturas de Pantalla

![image](https://github.com/user-attachments/assets/76d026f2-ecef-46f4-a188-889e14a948ef)
![image](https://github.com/user-attachments/assets/2f1aaa97-2eb3-456c-ac0f-941e4b3bcdf4)


## Contribuciones

Este proyecto es demostrativo y no recibe contribuciones. Para un futuro planearía hacerlo con shadcn y tailwindcss.
