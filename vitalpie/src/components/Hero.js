export class Hero {
  constructor() {
    this.hero = null;
  }

  render() {
    this.hero = document.createElement('section');
    this.hero.id = 'inicio';
    this.hero.className = 'hero';
    this.hero.innerHTML = `
      <div class="container">
        <div class="hero-content grid grid-2" style="min-height: 80vh; align-items: center; gap: 3rem;">
          <div class="hero-text">
            <h1 style="font-size: 3rem; font-weight: 700; color: var(--medical-dark-blue); margin-bottom: 1.5rem; line-height: 1.2;">
              Especialistas en Podología UBA
            </h1>
            <p style="font-size: 1.2rem; color: var(--medical-text); margin-bottom: 2rem; line-height: 1.6;">
              En Vital Pie ofrecemos atención podológica especializada con profesionales graduados de la UBA. 
              Cuidamos la salud de tus pies con tecnología avanzada y tratamientos personalizados.
            </p>
            <div class="hero-buttons flex gap-4" style="flex-wrap: wrap; margin-bottom: 2rem;">
              <a href="#turnos" class="btn btn-primary" style="font-size: 1.1rem; padding: 14px 28px;">
                📅 Reservar Turno
              </a>
              <a href="#servicios" class="btn btn-secondary" style="font-size: 1.1rem; padding: 14px 28px;">
                👣 Ver Tratamientos
              </a>
            </div>
            <div class="hero-features grid grid-3" style="gap: 1rem;">
              <div class="feature-card text-center card" style="padding: 1rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎓</div>
                <h4 style="color: var(--medical-dark-blue); font-size: 0.9rem; margin-bottom: 0.25rem;">Profesionales UBA</h4>
              </div>
              <div class="feature-card text-center card" style="padding: 1rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏰</div>
                <h4 style="color: var(--medical-dark-blue); font-size: 0.9rem; margin-bottom: 0.25rem;">Atención Rápida</h4>
              </div>
              <div class="feature-card text-center card" style="padding: 1rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔬</div>
                <h4 style="color: var(--medical-dark-blue); font-size: 0.9rem; margin-bottom: 0.25rem;">Tecnología Avanzada</h4>
              </div>
            </div>
          </div>
          <div class="hero-image">
            <div class="card" style="padding: 0; overflow: hidden;">
              <img src="./assets/image/IMG_9283.JPG" alt="Consultorio de Podología" style="width: 100%; height: auto; display: block;">
              <div style="padding: 1.5rem; background-color: var(--medical-blue); text-align: center;">
                <h3 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Salud Integral para tus Pies</h3>
                <p style="color: var(--medical-text); margin: 0; font-size: 0.9rem;">
                  Más de 10 años de experiencia en cuidados podológicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.addEventListeners();
    return this.hero;
  }

  addEventListeners() {
    const turnosBtn = this.hero.querySelector('a[href="#turnos"]');
    if (turnosBtn) {
      turnosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const turnosSection = document.getElementById('turnos');
        if (turnosSection) {
          turnosSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const serviciosBtn = this.hero.querySelector('a[href="#servicios"]');
    if (serviciosBtn) {
      serviciosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviciosSection = document.getElementById('servicios');
        if (serviciosSection) {
          serviciosSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
