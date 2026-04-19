export class Services {
  constructor() {
    this.services = null;
  }

  render() {
    this.services = document.createElement('section');
    this.services.id = 'servicios';
    this.services.className = 'services section';
    
    this.services.innerHTML = `
      <div class="container">
        <h2 class="section-title">Servicios de Podología</h2>
        <div class="services-grid grid grid-3">
          <div class="service-card card text-center">
            <img src="/src/assets/image/IMG_9284.JPG" alt="Consulta Podológica" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Consulta General</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Evaluación completa de la salud de tus pies con diagnóstico y tratamiento personalizado.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li>✓ Estudio biomecánico</li>
              <li>✓ Diagnóstico por imagen</li>
              <li>✓ Tratamiento personalizado</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/src/assets/image/IMG_9285.JPG" alt="Cirugía Podológica" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Cirugía Menor</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Procedimientos quirúrgicos ambulatorios para corrección de patologías podológicas.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li>✓ Uñas encarnadas</li>
              <li>✓ Eliminación de verrugas</li>
              <li>✓ Cirugía de juanetes</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/src/assets/image/IMG_9286.JPG" alt="Onicología" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Onicología</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Tratamiento especializado para enfermedades y patologías de las uñas de los pies.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li>✓ Tratamiento de hongos</li>
              <li>✓ Reconstrucción de uñas</li>
              <li>✓ Terapia láser</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/src/assets/image/IMG_9288.JPG" alt="Podología Deportiva" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Podología Deportiva</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Atención especializada para deportistas y prevención de lesiones podológicas.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li>✓ Análisis de pisada</li>
              <li>✓ Ortesis personalizadas</li>
              <li>✓ Tratamiento de lesiones</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/src/assets/image/IMG_9289.JPG" alt="Diabetes y Pies" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Pie Diabético</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Cuidado integral para pacientes diabéticos y prevención de complicaciones.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li>✓ Control vascular</li>
              <li>✓ Prevención de úlceras</li>
              <li>✓ Educación al paciente</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/src/assets/image/mesainstrumental.JPG" alt="Estética Podológica" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Estética Podológica</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Tratamientos estéticos para mejorar la apariencia y salud de tus pies.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li>✓ Limpieza profesional</li>
              <li>✓ Tratamiento de durezas</li>
              <li>✓ Diseño de uñas</li>
            </ul>
          </div>
        </div>

        <div class="cta-section text-center" style="margin-top: 4rem;">
          <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.8rem;">
            ¿Necesita tratamiento podológico?
          </h3>
          <p style="color: var(--medical-text); margin-bottom: 2rem; font-size: 1.1rem;">
            Consulte con nuestros especialistas graduados en la UBA para obtener el mejor tratamiento para sus pies.
          </p>
          <a href="#turnos" class="btn btn-primary" style="font-size: 1.1rem; padding: 14px 28px;">
            � Reservar Consulta
          </a>
        </div>
      </div>
    `;

    this.addEventListeners();
    return this.services;
  }

  addEventListeners() {
    const contactBtn = this.services.querySelector('a[href="#contacto"]');
    if (contactBtn) {
      contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
