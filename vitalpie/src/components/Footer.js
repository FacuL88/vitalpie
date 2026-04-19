export class Footer {
  constructor() {
    this.footer = null;
  }

  render() {
    this.footer = document.createElement('footer');
    this.footer.className = 'footer';
    this.footer.style.backgroundColor = 'var(--medical-dark-blue)';
    this.footer.style.color = 'var(--medical-white)';
    
    this.footer.innerHTML = `
      <div class="container">
        <div class="footer-content grid grid-3" style="padding: 3rem 0; gap: 2rem;">
          <div class="footer-section">
            <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">👣 Vital Pie</h3>
            <p style="line-height: 1.6; opacity: 0.9;">
              Tu consultorio de podología UBA, especializado en el cuidado integral de tus pies.
            </p>
            <div class="social-links flex gap-3" style="margin-top: 1rem;">
              <a href="#" style="color: var(--medical-white); font-size: 1.5rem; text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">
                <img src="./assets/icon/facebook.png" alt="Facebook" style="width: 24px; height: 24px;">
              </a>
              <a href="#" style="color: var(--medical-white); font-size: 1.5rem; text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">
                <img src="./assets/icon/instagram.png" alt="Instagram" style="width: 24px; height: 24px;">
              </a>
              <a href="#" style="color: var(--medical-white); font-size: 1.5rem; text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">
                <img src="./assets/icon/whatsappverdechico.png" alt="WhatsApp" style="width: 24px; height: 24px;">
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 style="margin-bottom: 1rem; font-size: 1.1rem;">Enlaces Rápidos</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.5rem;">
                <a href="#inicio" class="footer-link" style="color: var(--medical-white); text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">Inicio</a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#servicios" class="footer-link" style="color: var(--medical-white); text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">Servicios</a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#nosotros" class="footer-link" style="color: var(--medical-white); text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">Nosotros</a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#turnos" class="footer-link" style="color: var(--medical-white); text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">Pedir Turno</a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#contacto" class="footer-link" style="color: var(--medical-white); text-decoration: none; opacity: 0.8; transition: opacity 0.3s;">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 style="margin-bottom: 1rem; font-size: 1.1rem;">Información de Contacto</h4>
            <div style="line-height: 1.8; opacity: 0.9;">
              <p style="margin: 0 0 0.5rem 0;">📍 Av. Principal 1234, Ciudad Médica</p>
              <p style="margin: 0 0 0.5rem 0;">📞 (011) 1234-5678</p>
              <p style="margin: 0 0 0.5rem 0;">📧 info@vitalpie.com</p>
              <p style="margin: 0;">⏰ Lunes a Viernes: 8:00 - 20:00</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom" style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding: 1.5rem 0; text-align: center;">
          <p style="margin: 0; opacity: 0.8;">
            © ${new Date().getFullYear()} Vital Pie. Todos los derechos reservados. | 
            <a href="#" style="color: var(--medical-white); text-decoration: none; opacity: 0.8;">Política de Privacidad</a> | 
            <a href="#" style="color: var(--medical-white); text-decoration: none; opacity: 0.8;">Términos de Servicio</a>
          </p>
        </div>
      </div>
    `;

    this.addEventListeners();
    return this.footer;
  }

  addEventListeners() {
    // Smooth scrolling for footer links
    const footerLinks = this.footer.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Social links hover effect
    const socialLinks = this.footer.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.opacity = '1';
      });
      link.addEventListener('mouseleave', () => {
        link.style.opacity = '0.8';
      });
    });

    // Footer links hover effect
    const footerNavLinks = this.footer.querySelectorAll('.footer-link');
    footerNavLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.opacity = '1';
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', () => {
        link.style.opacity = '0.8';
        link.style.textDecoration = 'none';
      });
    });
  }
}
