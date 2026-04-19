# Vital Pie - Podología UBA

Sitio web profesional para consultorio de podología especializado, desarrollado con Vite, JavaScript vanilla y CSS moderno.

## Características

- **Diseño Responsivo**: Adaptado para todos los dispositivos
- **Sistema de Turneras**: Calendario funcional con horarios personalizados
- **Formulario de Contacto**: Sistema de mensajes interactivo
- **Navegación Suave**: Scroll animado entre secciones
- **Optimizado**: Rendimiento optimizado con Vite

## Tecnologías

- **Vite**: Build tool y desarrollo
- **JavaScript Vanilla**: ES6 Modules
- **CSS3**: Custom properties y diseño moderno
- **HTML5**: Semántica y accesibilidad

## Horario de Atención

- **Lunes a Viernes**: 9:00 - 19:00 hs
- **Sábados**: 9:00 - 13:00 hs
- **Domingos**: Cerrado

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/FacuL88/vitalpie.git

# Entrar al directorio
cd vitalpie

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Deploy en Netlify

1. Conectar el repositorio de GitHub a Netlify
2. Configurar build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy automático en cada push a main

## Estructura del Proyecto

```
vitalpie/
src/
  components/          # Componentes modulares
    Header.js
    Hero.js
    Services.js
    AppointmentBooking.js
    About.js
    Contact.js
    Footer.js
  assets/             # Imágenes y recursos
    icon/
    image/
  App.css            # Estilos principales
  main.js            # Punto de entrada
```

## Funcionalidades

- **Turnera Online**: Selección de fecha y hora con validación
- **Gestión de Turnos**: Almacenamiento local de reservas
- **Formulario de Contacto**: Envío de mensajes con validación
- **Navegación**: Menú responsive con animaciones
- **Diseño Médico**: Paleta de colores profesionales

## Autor

Desarrollado para Vital Pie - Especialistas en Podología UBA

## Licencia

MIT License
