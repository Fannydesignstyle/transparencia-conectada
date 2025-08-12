# Transparencia Conectada

Plataforma web diseñada por Fanny Design Style con enfoque institucional y ciudadano para fortalecer la transparencia a través del diseño estratégico y la tecnología accesible.

## Características

- Landing page con propuesta de valor y objetivos del proyecto
- Fichas institucionales de funcionarios con información detallada
- Generación automática de códigos QR para cada perfil
- Métricas en tiempo real con Google Analytics
- Diseño responsivo para todos los dispositivos
- Banner de cookies para cumplimiento de privacidad

## Tecnologías Utilizadas

- Frontend: React + Vite
- Estilos: CSS personalizado con Tailwind CSS
- Animaciones: Framer Motion
- Router: React Router DOM
- Analítica: Google Analytics 4
- Generación de QR: qrcode.react
- PDF: react-to-print

## Estructura del Proyecto

```
src/
├── components/
│   ├── common/ # Componentes reutilizables
│   ├── landing/ # Componentes de la landing page
│   └── officials/ # Componentes de fichas institucionales
├── data/
│   └── officials.json # Datos de funcionarios
├── pages/ # Páginas principales
├── utils/
│   └── analytics.js # Configuración de Google Analytics
├── App.jsx # Componente principal de la aplicación
├── main.jsx # Punto de entrada
├── index.css # Estilos globales
└── variables.css # Variables CSS
```


## Instalación y Desarrollo

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Fannydesignstyle/transparencia-conectada.git
   cd transparencia-conectada