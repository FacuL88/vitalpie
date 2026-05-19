import emailjs from '@emailjs/browser';

export class AppointmentBooking {
  constructor() {
    this.booking = null;
    this.selectedDate = null;
    this.selectedTime = null;
    this.appointments = this.loadAppointments();
    
    // EmailJS configuration - Reemplazar con tus credenciales
    this.emailConfig = {
      PUBLIC_KEY: '64qsXAEUpgh52_Ok8',
      SERVICE_ID: 'service_q1onmot',
      TEMPLATE_ID_PATIENT: 'template_o82111j',
      TEMPLATE_ID_ADMIN: 'template_2w66n0l',
      ADMIN_EMAIL: 'consultoriovitalpie@gmail.com' // Email del administrador
    };
  }

  loadAppointments() {
    const stored = localStorage.getItem('vitalpie_appointments');
    return stored ? JSON.parse(stored) : [];
  }

  saveAppointments() {
    localStorage.setItem('vitalpie_appointments', JSON.stringify(this.appointments));
  }

  isTimeSlotAvailable(date, time) {
    const dateStr = date.toISOString().split('T')[0];
    return !this.appointments.some(apt => 
      apt.date === dateStr && apt.time === time
    );
  }

  render() {
    this.booking = document.createElement('section');
    this.booking.id = 'turnos';
    this.booking.className = 'appointment-booking section';
    this.booking.style.backgroundColor = 'var(--medical-blue)';
    
    this.booking.innerHTML = `
      <div class="container">
        <h2 class="section-title">Reservar Turno de Podología</h2>
        <div class="booking-info card" style="max-width: 800px; margin: 0 auto 2rem; background-color: var(--medical-green); border: 2px solid #4caf50;">
          <div class="flex gap-4" style="align-items: center;">
            <div style="font-size: 2rem;">⏰</div>
            <div>
              <h3 style="color: #2e7d32; margin-bottom: 0.5rem;">Horario de Atención</h3>
              <p style="color: #2e7d32; margin: 0; font-weight: 500;">
                Lunes: 9:00 - 12:20 hs<br>
                Martes: 9:00 - 12:20 hs y 13:40 - 17:00 hs<br>
                Miércoles: 9:00 - 13:00 hs y 14:20 - 16:20 hs<br>
                Jueves: 9:00 - 12:20 hs y 13:40 - 17:40 hs<br>
                Viernes: 9:00 - 12:00 hs y 13:40 - 17:40 hs<br>
                <strong>Sábados y Domingos: Cerrado</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div class="booking-form card" style="max-width: 800px; margin: 0 auto;">
          <form id="appointmentForm" class="flex flex-column gap-6">
            <div class="form-group">
              <label for="patientName" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                Nombre Completo *
              </label>
              <input type="text" id="patientName" name="patientName" required
                style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                placeholder="Ingrese su nombre completo">
            </div>

            <div class="form-group">
              <label for="patientPhone" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                Teléfono *
              </label>
              <input type="tel" id="patientPhone" name="patientPhone" required
                style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                placeholder="Ingrese su número de teléfono">
            </div>

            <div class="form-group">
              <label for="patientEmail" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                Email *
              </label>
              <input type="email" id="patientEmail" name="patientEmail" required
                style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                placeholder="Ingrese su email">
            </div>

            <div class="form-group">
              <label for="appointmentDate" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                Fecha del Turno *
              </label>
              <input type="date" id="appointmentDate" name="appointmentDate" required
                style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                min="${new Date().toISOString().split('T')[0]}">
            </div>

            <div class="form-group">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                Hora del Turno *
              </label>
              <div id="timeSlots" class="time-slots grid grid-3" style="gap: 0.5rem;">
                <!-- Time slots will be generated here -->
              </div>
            </div>

            <div class="form-group">
              <label for="appointmentReason" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                Motivo de la Consulta Podológica
              </label>
              <textarea id="appointmentReason" name="appointmentReason" rows="4"
                style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px; resize: vertical;"
                placeholder="Describa brevemente el motivo de su consulta (ej: dolor en pies, uñas encarnadas, hongos, etc.)..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="align-self: center; padding: 14px 32px; font-size: 18px;">
              📅 Confirmar Turno
            </button>
          </form>
        </div>

        <div id="appointmentMessage" class="message" style="margin-top: 2rem; text-align: center; display: none;">
          <!-- Success/error messages will appear here -->
        </div>
      </div>
    `;

    this.addEventListeners();
    this.generateTimeSlots();
    return this.booking;
  }

  generateTimeSlots() {
    const timeSlotsContainer = this.booking.querySelector('#timeSlots');
    if (!timeSlotsContainer) return;
    
    const slots = this.generateAvailableTimeSlots();

    timeSlotsContainer.innerHTML = slots.map(time => {
      const isAvailable = this.selectedDate ? this.isTimeSlotAvailable(this.selectedDate, time) : false;
      const disabledClass = this.selectedDate && !isAvailable ? 'disabled' : '';
      const disabledAttr = this.selectedDate && !isAvailable ? 'disabled' : '';
      
      return `
        <button type="button" class="time-slot btn btn-secondary ${disabledClass}" 
          data-time="${time}" ${disabledAttr}
          style="padding: 8px 12px; font-size: 14px; margin: 0;">
          ${time}
        </button>
      `;
    }).join('');
  }

  generateAvailableTimeSlots() {
    const slots = [];
    const selectedDate = this.selectedDate;
    
    if (!selectedDate) return slots;
    
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    if (dayOfWeek === 0 || dayOfWeek === 6) return slots; // No appointments on Sunday or Saturday
    
    // Define schedules for each day (in minutes from midnight)
    const schedules = {
      1: [{ start: 9 * 60, end: 12 * 60 + 20 }], // Monday: 9:00 - 12:20
      2: [{ start: 9 * 60, end: 12 * 60 + 20 }, { start: 13 * 60 + 40, end: 17 * 60 }], // Tuesday: 9:00 - 12:20 and 13:40 - 17:00
      3: [{ start: 9 * 60, end: 13 * 60 }, { start: 14 * 60 + 20, end: 16 * 60 + 20 }], // Wednesday: 9:00 - 13:00 and 14:20 - 16:20
      4: [{ start: 9 * 60, end: 12 * 60 + 20 }, { start: 13 * 60 + 40, end: 17 * 60 + 40 }], // Thursday: 9:00 - 12:20 and 13:40 - 17:40
      5: [{ start: 9 * 60, end: 12 * 60 }, { start: 13 * 60 + 40, end: 17 * 60 + 40 }] // Friday: 9:00 - 12:00 and 13:40 - 17:40
    };
    
    const daySchedule = schedules[dayOfWeek];
    if (!daySchedule) return slots;
    
    // Generate time slots for each time block
    for (const block of daySchedule) {
      for (let minutes = block.start; minutes <= block.end; minutes += 40) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    
    return slots;
  }

  addEventListeners() {
    // Wait for DOM to be ready
    setTimeout(() => {
      const form = this.booking.querySelector('#appointmentForm');
      const dateInput = this.booking.querySelector('#appointmentDate');
      const timeSlotsContainer = this.booking.querySelector('#timeSlots');

      if (!form || !dateInput || !timeSlotsContainer) {
        console.error('Form elements not found');
        return;
      }

      // Date selection handler
      dateInput.addEventListener('change', (e) => {
        // Create date in local timezone to avoid UTC issues
        const dateParts = e.target.value.split('-');
        this.selectedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        this.selectedTime = null;
        this.generateTimeSlots();
      });

      // Time slot selection handler
      timeSlotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('time-slot') && !e.target.disabled) {
          // Remove previous selection
          document.querySelectorAll('.time-slot').forEach(slot => {
            slot.classList.remove('btn-primary');
            slot.classList.add('btn-secondary');
          });
          
          // Add selection to clicked slot
          e.target.classList.remove('btn-secondary');
          e.target.classList.add('btn-primary');
          this.selectedTime = e.target.dataset.time;
        }
      });

      // Form submission handler
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitAppointment();
      });
    }, 100);
  }

  submitAppointment() {
    const formData = new FormData(this.booking.querySelector('#appointmentForm'));
    const messageDiv = this.booking.querySelector('#appointmentMessage');

    if (!this.selectedTime) {
      this.showMessage('Por favor seleccione una hora para el turno.', 'error');
      return;
    }

    // Validate availability before confirming
    if (!this.isTimeSlotAvailable(this.selectedDate, this.selectedTime)) {
      this.showMessage('❌ Este horario ya no está disponible. Por favor seleccione otro horario.', 'error');
      this.generateTimeSlots(); // Refresh time slots to show updated availability
      return;
    }

    const appointment = {
      id: Date.now(),
      name: formData.get('patientName'),
      phone: formData.get('patientPhone'),
      email: formData.get('patientEmail'),
      date: this.selectedDate.toISOString().split('T')[0],
      time: this.selectedTime,
      reason: formData.get('appointmentReason'),
      createdAt: new Date().toISOString()
    };

    this.appointments.push(appointment);
    this.saveAppointments();

    // Enviar emails
    this.sendEmailToPatient(appointment);
    this.sendEmailToAdmin(appointment);

    this.showMessage(
      `✅ Turno confirmado exitosamente para ${appointment.name} el ${appointment.date} a las ${appointment.time}. Se ha enviado un email de confirmación.`,
      'success'
    );

    // Reset form
    this.booking.querySelector('#appointmentForm').reset();
    this.selectedDate = null;
    this.selectedTime = null;
    this.generateTimeSlots();
  }

  showMessage(message, type) {
    const messageDiv = this.booking.querySelector('#appointmentMessage');
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = `
      <div class="card" style="background-color: ${type === 'success' ? 'var(--medical-green)' : '#ffebee'}; 
        color: ${type === 'success' ? '#2e7d32' : '#c62828'}; border: 2px solid ${type === 'success' ? '#4caf50' : '#f44336'};">
        <p style="margin: 0; font-weight: 500;">${message}</p>
      </div>
    `;

    // Hide message after 5 seconds
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
  }

  async sendEmailToPatient(appointment) {
    try {
      // Inicializar EmailJS con la public key
      emailjs.init(this.emailConfig.PUBLIC_KEY);

      const templateParams = {
        to_email: appointment.email,
        patient_name: appointment.name,
        appointment_date: appointment.date,
        appointment_time: appointment.time,
        appointment_reason: appointment.reason || 'No especificado',
        patient_phone: appointment.phone
      };

      await emailjs.send(
        this.emailConfig.SERVICE_ID,
        this.emailConfig.TEMPLATE_ID_PATIENT,
        templateParams
      );

      console.log('Email enviado al paciente:', appointment.email);
    } catch (error) {
      console.error('Error al enviar email al paciente:', error);
      // No fallar el proceso si el email falla
    }
  }

  async sendEmailToAdmin(appointment) {
    try {
      // Inicializar EmailJS con la public key
      emailjs.init(this.emailConfig.PUBLIC_KEY);

      const templateParams = {
        to_email: this.emailConfig.ADMIN_EMAIL,
        patient_name: appointment.name,
        patient_email: appointment.email,
        patient_phone: appointment.phone,
        appointment_date: appointment.date,
        appointment_time: appointment.time,
        appointment_reason: appointment.reason || 'No especificado'
      };

      await emailjs.send(
        this.emailConfig.SERVICE_ID,
        this.emailConfig.TEMPLATE_ID_ADMIN,
        templateParams
      );

      console.log('Email enviado al administrador:', this.emailConfig.ADMIN_EMAIL);
    } catch (error) {
      console.error('Error al enviar email al administrador:', error);
      // No fallar el proceso si el email falla
    }
  }
}
