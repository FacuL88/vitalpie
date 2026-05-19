# Configuración de EmailJS para Vital Pie

Este proyecto utiliza EmailJS para enviar notificaciones por email cuando se reserva un turno.

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a https://www.emailjs.com/
- Regístrate y crea una cuenta gratuita

### 2. Configurar un Servicio de Email
- En el dashboard de EmailJS, ve a "Email Services"
- Agrega un servicio (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta de email

### 3. Crear Templates de Email

#### Template para el Paciente (TEMPLATE_ID_PATIENT)
- Ve a "Email Templates" y crea un nuevo template
- Usa las siguientes variables en tu template:
  - `{{to_email}}` - Email del paciente
  - `{{patient_name}}` - Nombre del paciente
  - `{{appointment_date}}` - Fecha del turno
  - `{{appointment_time}}` - Hora del turno
  - `{{appointment_reason}}` - Motivo de la consulta
  - `{{patient_phone}}` - Teléfono del paciente

Ejemplo de asunto: "Confirmación de turno - Vital Pie"
Ejemplo de contenido:
```
Hola {{patient_name}},

Tu turno ha sido confirmado exitosamente.

📅 Fecha: {{appointment_date}}
⏰ Hora: {{appointment_time}}
📞 Teléfono: {{patient_phone}}
📝 Motivo: {{appointment_reason}}

Por favor llegar 10 minutos antes de la hora del turno.

Saludos,
Vital Pie
```

#### Template para el Administrador (TEMPLATE_ID_ADMIN)
- Crea otro template para notificar al administrador
- Usa las mismas variables más:
  - `{{patient_email}}` - Email del paciente

Ejemplo de asunto: "Nuevo turno reservado - {{patient_name}}"
Ejemplo de contenido:
```
Nuevo turno reservado:

Paciente: {{patient_name}}
Email: {{patient_email}}
Teléfono: {{patient_phone}}
Fecha: {{appointment_date}}
Hora: {{appointment_time}}
Motivo: {{appointment_reason}}
```

### 4. Obtener las credenciales
- Copia tu PUBLIC KEY desde el dashboard de EmailJS
- Copia el SERVICE ID del servicio que configuraste
- Copia los TEMPLATE IDs de los templates que creaste

### 5. Configurar el proyecto
Abre el archivo `src/components/AppointmentBooking.js` y reemplaza los valores en `this.emailConfig`:

```javascript
this.emailConfig = {
  PUBLIC_KEY: 'TU_PUBLIC_KEY_DE_EMAILJS',        // Reemplazar con tu Public Key
  SERVICE_ID: 'TU_SERVICE_ID',                    // Reemplazar con tu Service ID
  TEMPLATE_ID_PATIENT: 'TU_TEMPLATE_ID_PACIENTE', // Reemplazar con el Template ID para pacientes
  TEMPLATE_ID_ADMIN: 'TU_TEMPLATE_ID_ADMIN',       // Reemplazar con el Template ID para admin
  ADMIN_EMAIL: 'admin@vitalpie.com'                // Reemplazar con el email del administrador
};
```

### 6. Probar la configuración
- Ejecuta el proyecto: `npm run dev`
- Completa el formulario de turnos con un email válido
- Verifica que recibes ambos emails (paciente y administrador)

## Notas importantes
- EmailJS tiene un límite de emails gratuitos por mes (200 emails en el plan gratuito)
- Los emails se envían de forma asíncrona, por lo que no bloquean el proceso de reserva
- Si el envío de email falla, el turno aún se guardará correctamente
- Revisa la consola del navegador para ver logs de errores en el envío de emails
