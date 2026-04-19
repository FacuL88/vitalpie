export class Contact {
  constructor() {
    this.contact = null;
  }

  render() {
    this.contact = document.createElement('section');
    this.contact.id = 'contacto';
    this.contact.className = 'contact section';
    this.contact.style.backgroundColor = 'var(--medical-blue)';
    
    this.contact.innerHTML = `
      <div class="container">
        <h2 class="section-title">Contacto</h2>
        
        <div class="contact-content grid grid-2" style="gap: 3rem;">
          <div class="contact-info">
            <div class="card">
              <h3 style="color: var(--medical-dark-blue); margin-bottom: 2rem; font-size: 1.5rem;">
                Información de Contacto
              </h3>
              
              <div class="contact-item flex gap-4 mb-6" style="align-items: center;">
                <div style="font-size: 2rem; color: var(--medical-accent);">📍</div>
                <div>
                  <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Dirección</h4>
                  <p style="color: var(--medical-text); margin: 0;">
                    Av. Corrientes 1234<br>
                    CABA, Buenos Aires
                  </p>
                </div>
              </div>
              
              <div class="contact-item flex gap-4 mb-6" style="align-items: center;">
                <div style="font-size: 2rem; color: var(--medical-accent);">📞</div>
                <div>
                  <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Teléfono</h4>
                  <p style="color: var(--medical-text); margin: 0;">
                    Consultas: (011) 4567-8910<br>
                    WhatsApp: (011) 4567-8911
                  </p>
                </div>
              </div>
              
              <div class="contact-item flex gap-4 mb-6" style="align-items: center;">
                <div style="font-size: 2rem; color: var(--medical-accent);">📧</div>
                <div>
                  <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Email</h4>
                  <p style="color: var(--medical-text); margin: 0;">
                    info@vitalpie.com<br>
                    turnos@vitalpie.com
                  </p>
                </div>
              </div>
              
              <div class="contact-item flex gap-4 mb-6" style="align-items: center;">
                <div style="font-size: 2rem; color: var(--medical-accent);">⏰</div>
                <div>
                  <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Horario de Atención</h4>
                  <p style="color: var(--medical-text); margin: 0;">
                    Lunes a Viernes: 9:00 - 19:00<br>
                    Sábados: 9:00 - 13:00<br>
                    <strong>Domingos: Cerrado</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div class="card" style="margin-top: 2rem; padding: 0; overflow: hidden;">
              <img src="./assets/image/fototrabajo2.JPG" alt="Consultorio" style="width: 100%; height: 200px; object-fit: cover;">
              <div style="padding: 1.5rem; background-color: var(--medical-blue); text-align: center;">
                <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">👣 Consulta Podológica</h4>
                <p style="color: var(--medical-text); margin: 0; font-size: 0.9rem;">
                  Especialistas graduados en la UBA para el cuidado de tus pies
                </p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <div class="card">
              <h3 style="color: var(--medical-dark-blue); margin-bottom: 2rem; font-size: 1.5rem;">
                Envíanos un Mensaje
              </h3>
              
              <form id="contactForm" class="flex flex-column gap-4">
                <div class="form-group">
                  <label for="contactName" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                    Nombre Completo *
                  </label>
                  <input type="text" id="contactName" name="name" required
                    style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                    placeholder="Ingrese su nombre completo">
                </div>
                
                <div class="form-group">
                  <label for="contactEmail" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                    Email *
                  </label>
                  <input type="email" id="contactEmail" name="email" required
                    style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                    placeholder="Ingrese su email">
                </div>
                
                <div class="form-group">
                  <label for="contactPhone" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                    Teléfono
                  </label>
                  <input type="tel" id="contactPhone" name="phone"
                    style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;"
                    placeholder="Ingrese su teléfono">
                </div>
                
                <div class="form-group">
                  <label for="contactSubject" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                    Asunto *
                  </label>
                  <select id="contactSubject" name="subject" required
                    style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px;">
                    <option value="">Seleccione un asunto</option>
                    <option value="consulta">Consulta Podológica</option>
                    <option value="turno">Información sobre Turnos</option>
                    <option value="servicio">Información sobre Tratamientos</option>
                    <option value="urgencia">Urgencia Podológica</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="contactMessage" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--medical-dark-blue);">
                    Mensaje *
                  </label>
                  <textarea id="contactMessage" name="message" rows="5" required
                    style="width: 100%; padding: 12px; border: 2px solid var(--medical-border); border-radius: 8px; font-size: 16px; resize: vertical;"
                    placeholder="Describa su consulta podológica o motivo de contacto..."></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary" style="align-self: flex-start;">
                  📤 Enviar Mensaje
                </button>
              </form>
              
              <div id="contactMessage" class="message" style="margin-top: 1rem; display: none;">
                <!-- Success/error messages will appear here -->
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.addEventListeners();
    return this.contact;
  }

  addEventListeners() {
    // Wait for DOM to be ready
    setTimeout(() => {
      const form = this.contact.querySelector('#contactForm');
      
      if (!form) {
        console.error('Contact form not found');
        return;
      }
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitContactForm();
      });
    }, 100);
  }

  submitContactForm() {
    const formData = new FormData(this.contact.querySelector('#contactForm'));
    const messageDiv = this.contact.querySelector('#contactMessage');
    
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Store contact messages (in real app, this would send to server)
    const messages = JSON.parse(localStorage.getItem('vitalpie_contact_messages') || '[]');
    messages.push(contactData);
    localStorage.setItem('vitalpie_contact_messages', JSON.stringify(messages));

    // Show success message
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = `
      <div class="card" style="background-color: var(--medical-green); color: #2e7d32; border: 2px solid #4caf50;">
        <p style="margin: 0; font-weight: 500;">
          ✅ Mensaje enviado exitosamente. Nos pondremos en contacto con usted a la brevedad.
        </p>
      </div>
    `;

    // Reset form
    this.contact.querySelector('#contactForm').reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
  }
}
