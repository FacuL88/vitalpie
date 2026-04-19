export class AppointmentBooking {
  constructor() {
    this.booking = null;
    this.selectedDate = null;
    this.selectedTime = null;
    this.appointments = this.loadAppointments();
  }

  loadAppointments() {
    const stored = localStorage.getItem('vitalpie_appointments');
    return stored ? JSON.parse(stored) : [];
  }

  saveAppointments() {
    localStorage.setItem('vitalpie_appointments', JSON.stringify(this.appointments));
  }

  generateTimeSlots() {
    const slots = [];
    const selectedDate = this.selectedDate;
    
    if (!selectedDate) return slots;
    
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const isSaturday = dayOfWeek === 6;
    const isSunday = dayOfWeek === 0;
    
    if (isSunday) return slots; // No appointments on Sunday
    
    const startHour = isSaturday ? 9 : 9;
    const endHour = isSaturday ? 13 : 19;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
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
                Lunes a Viernes: 9:00 - 19:00 hs<br>
                Sábados: 9:00 - 13:00 hs<br>
                <strong>Domingos: Cerrado</strong>
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
    const isSaturday = dayOfWeek === 6;
    const isSunday = dayOfWeek === 0;
    
    if (isSunday) return slots; // No appointments on Sunday
    
    const startHour = isSaturday ? 9 : 9;
    const endHour = isSaturday ? 13 : 19;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
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
        this.selectedDate = new Date(e.target.value);
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

    const appointment = {
      id: Date.now(),
      name: formData.get('patientName'),
      phone: formData.get('patientPhone'),
      date: this.selectedDate.toISOString().split('T')[0],
      time: this.selectedTime,
      reason: formData.get('appointmentReason'),
      createdAt: new Date().toISOString()
    };

    this.appointments.push(appointment);
    this.saveAppointments();

    this.showMessage(
      `✅ Turno confirmado exitosamente para ${appointment.name} el ${appointment.date} a las ${appointment.time}.`,
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
}
