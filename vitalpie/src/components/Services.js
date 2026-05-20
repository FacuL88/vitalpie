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
            <img src="/assets/image/IMG_9284.JPG" alt="Consulta Podológica" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Consulta General</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Evaluación completa de la salud de tus pies con diagnóstico y tratamiento personalizado.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li style="font-weight: bold">✓ Anamnesis detallada</li>
              <li style="font-weight: bold">✓ Atencion personalizada</li>
              <li style="font-weight: bold">✓ Tratamiento segun evaluacion clinica</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/assets/image/IMG_9285.JPG" alt="Cirugía Podológica" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Test micotico</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Prueba de laboratorio que permite detectar infecciones producidas por hongos en uñas.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li style="font-weight: bold">✓ Toma de muestra con materia esteril y descartable</li>
              <li style="font-weight: bold">✓ Evaluacion del estado de la uña</li>
              <li style="font-weight: bold">✓ Acesoramiento y derivacion correspondiente</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/assets/image/IMG_9286.JPG" alt="Onicología" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Tratamientos en heridas</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Contamos con una profesional especializada en heridas con amplia trayectoria en trabajo y tratamiento sobre lesiones en la pie
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li style="font-weight: bold">✓ Anamnesis profunda</li>
              <li style="font-weight: bold">✓ Evaluacion del grado de la herida</li>
              <li style="font-weight: bold">✓ Tratamiento personalizado segun lesion</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/assets/image/IMG_9288.JPG" alt="Podología Deportiva" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Plantillas</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Trabajamos con ortopedistas especializados en la materia
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li style="font-weight: bold">✓ Realizamos plantillas con o sin receta</li>
              <li style="font-weight: bold">✓ Pedigrafia y evaluacion de la pisada</li>
              <li style="font-weight: bold">✓ Acesoramiento personalizado</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/assets/image/IMG_9289.JPG" alt="Diabetes y Pies" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Pie Diabético</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Cuidado integral para pacientes diabéticos y prevención de complicaciones.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li style="font-weight: bold">✓ Control vascular</li>
              <li style="font-weight: bold">✓ Prevención de úlceras</li>
              <li style="font-weight: bold">✓ Educación al paciente</li>
            </ul>
          </div>

          <div class="service-card card text-center">
            <img src="/assets/image/IMG_9289.JPG" alt="Estética Podológica" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Estética Podológica</h3>
            <p style="color: var(--medical-text); line-height: 1.6;">
              Tratamientos estéticos para mejorar la apariencia y salud de tus pies.
            </p>
            <ul style="text-align: left; margin-top: 1rem; color: var(--medical-text);">
              <li style="font-weight: bold">✓ Hidratacion de tus pies</li>
              <li style="font-weight: bold">✓ Tratamiento de durezas</li>
              <li style="font-weight: bold">✓ Recontruccion de uñas</li>
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
