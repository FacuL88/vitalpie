export class About {
  constructor() {
    this.about = null;
  }

  render() {
    this.about = document.createElement('section');
    this.about.id = 'nosotros';
    this.about.className = 'about section';
    this.about.style.backgroundColor = 'var(--medical-white)';
    
    this.about.innerHTML = `
      <div class="container">
        <h2 class="section-title">Sobre Vital Pie</h2>
        
        <div class="about-content grid grid-2" style="align-items: center; gap: 3rem;">
          <div class="about-text">
            <h3 style="color: var(--medical-dark-blue); margin-bottom: 1.5rem; font-size: 2rem;">
              Especialistas en Podología UBA
            </h3>
            <p style="color: var(--medical-text); margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
              En Vital Pie somos un consultorio especializado en podología con profesionales graduados de la Universidad de Buenos Aires. 
              Desde nuestro consultorio, hemos ayudado a miles de pacientes a recuperar la salud y bienestar de sus pies.
            </p>
            <p style="color: var(--medical-text); margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.1rem;">
              Nuestro equipo de podólogos está altamente capacitado y comprometido con el bienestar de cada paciente, 
              utilizando tecnología de punta y siguiendo los más altos estándares de atención podológica.
            </p>
            <div class="about-stats grid grid-3" style="margin-top: 2rem;">
              <div class="stat text-center">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--medical-accent); margin-bottom: 0.5rem;">25+</div>
                <div style="color: var(--medical-text); font-weight: 500;">Años de Experiencia</div>
              </div>
              <div class="stat text-center">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--medical-accent); margin-bottom: 0.5rem;">10.000+</div>
                <div style="color: var(--medical-text); font-weight: 500;">Pacientes Tratados</div>
              </div>
              <div class="stat text-center">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--medical-accent); margin-bottom: 0.5rem;">🎓</div>
                <div style="color: var(--medical-text); font-weight: 500;">Graduados UBA</div>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="card" style="padding: 0; overflow: hidden;">
              <img src="/assets/image/img-quienessomos.jpeg" alt="Sobre Nosotros" style="width: 100%; height: auto; display: block;">
              <div style="padding: 2rem; background-color: var(--medical-blue); text-align: center;">
                <h4 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Nuestra Misión</h4>
                <p style="color: var(--medical-text); line-height: 1.6; margin-bottom: 2rem;">
                  Proporcionar atención podológica integral y especializada para mejorar la salud y calidad de vida de nuestros pacientes.
                </p>
                
                <h4 style="color: var(--medical-dark-blue); margin-bottom: 1rem; font-size: 1.5rem;">Nuestra Visión</h4>
                <p style="color: var(--medical-text); line-height: 1.6;">
                  Ser el consultorio de podología de referencia, reconocido por la excelencia académica UBA y el cuidado humano.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="team-section" style="margin-top: 4rem;">
          <h3 style="color: var(--medical-dark-blue); text-align: center; margin-bottom: 3rem; font-size: 2rem;">
            Nuestro Equipo de Podólogos
          </h3>
          <div class="team-grid grid grid-3">
            <div class="team-member card text-center">
              <div style="font-size: 4rem; margin-bottom: 1rem;">👩‍⚕️</div>
              <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Lic. Calicchio Claudia</h4>
              <p style="color: var(--medical-accent); font-weight: 500; margin-bottom: 1rem;">Podóloga UBA</p>
              <p style="color: var(--medical-text); font-size: 0.9rem;">
                Especialista en heridas del pie diabetico con más de 20 años de experiencia.
              </p>
            </div>
            
            <div class="team-member card text-center">
              <div style="font-size: 4rem; margin-bottom: 1rem;">👩‍⚕️</div>
              <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Lic. Laugle Natalia</h4>
              <p style="color: var(--medical-accent); font-weight: 500; margin-bottom: 1rem;">Podóloga UBA</p>
              <p style="color: var(--medical-text); font-size: 0.9rem;">
                Especialista en tratamientos de onicocriptosis, verrugas plantares .
              </p>
            </div>
            
            <div class="team-member card text-center">
              <div style="font-size: 4rem; margin-bottom: 1rem;">👩‍⚕️</div>
              <h4 style="color: var(--medical-dark-blue); margin-bottom: 0.5rem;">Lic. Piccinino Sabrina</h4>
              <p style="color: var(--medical-accent); font-weight: 500; margin-bottom: 1rem;">Podóloga UBA</p>
              <p style="color: var(--medical-text); font-size: 0.9rem;">
                Especialista en queratosis y helomas. </p>
            </div>
          </div>
        </div>
      </div>
    `;

    return this.about;
  }
}
