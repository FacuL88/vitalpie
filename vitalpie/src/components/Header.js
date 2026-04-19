export class Header {
  constructor() {
    this.header = null;
    this.isMenuOpen = false;
  }

  render() {
    this.header = document.createElement('header');
    this.header.className = 'header';
    this.header.style.backgroundColor = 'var(--medical-white)';
    this.header.style.boxShadow = '0 2px 4px var(--medical-shadow)';
    this.header.style.position = 'sticky';
    this.header.style.top = '0';
    this.header.style.zIndex = '1000';
    
    this.header.innerHTML = `
      <div class="container">
        <nav class="flex-center py-4" style="justify-content: space-between; width: 100%;">
          <div class="logo" style="display: flex; align-items: center;">
            <img src="/src/assets/icon/vitalpieico3.ico" alt="Vital Pie" style="height: 40px; margin-right: 10px;">
            <h1 style="color: var(--medical-dark-blue); font-size: 1.5rem; font-weight: 600; margin: 0;">
              Vital Pie - Podología UBA
            </h1>
          </div>
          <ul class="nav-menu flex-center gap-6" style="list-style: none; margin: 0; padding: 0;">
            <li><a href="#inicio" class="nav-link" style="color: var(--medical-text); text-decoration: none; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.3s ease;">Inicio</a></li>
            <li><a href="#servicios" class="nav-link" style="color: var(--medical-text); text-decoration: none; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.3s ease;">Servicios</a></li>
            <li><a href="#nosotros" class="nav-link" style="color: var(--medical-text); text-decoration: none; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.3s ease;">Nosotros</a></li>
            <li><a href="#contacto" class="nav-link" style="color: var(--medical-text); text-decoration: none; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.3s ease;">Contacto</a></li>
            <li><a href="#turnos" class="btn btn-primary" style="padding: 10px 20px; font-weight: 600; text-decoration: none;">📅 Pedir Turno</a></li>
          </ul>
          <button class="mobile-menu-btn" style="display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--medical-dark-blue);">
            ☰
          </button>
        </nav>
      </div>
    `;

    this.addEventListeners();
    return this.header;
  }

  addEventListeners() {
    const mobileMenuBtn = this.header.querySelector('.mobile-menu-btn');
    const navMenu = this.header.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
          navMenu.style.display = 'flex';
          navMenu.style.flexDirection = 'column';
          navMenu.style.position = 'absolute';
          navMenu.style.top = '100%';
          navMenu.style.left = '0';
          navMenu.style.right = '0';
          navMenu.style.backgroundColor = 'var(--medical-white)';
          navMenu.style.boxShadow = '0 4px 6px var(--medical-shadow)';
          navMenu.style.padding = '1rem';
          navMenu.style.zIndex = '1000';
          navMenu.style.alignItems = 'stretch';
          mobileMenuBtn.textContent = '✕';
        } else {
          navMenu.style.display = '';
          navMenu.style.flexDirection = '';
          navMenu.style.position = '';
          navMenu.style.top = '';
          navMenu.style.left = '';
          navMenu.style.right = '';
          navMenu.style.backgroundColor = '';
          navMenu.style.boxShadow = '';
          navMenu.style.padding = '';
          navMenu.style.zIndex = '';
          navMenu.style.alignItems = '';
          mobileMenuBtn.textContent = '☰';
        }
      });
    }

    // Add hover effects to nav links
    const navLinks = this.header.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = 'var(--medical-blue)';
        link.style.color = 'var(--medical-dark-blue)';
      });
      link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '';
        link.style.color = 'var(--medical-text)';
      });
    });

    // Smooth scrolling for navigation links
    const allLinks = this.header.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu if open
          if (this.isMenuOpen) {
            mobileMenuBtn.click();
          }
        }
      });
    });
  }

  setupResponsive() {
    const mobileMenuBtn = this.header.querySelector('.mobile-menu-btn');
    const navMenu = this.header.querySelector('.nav-menu');
    
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        mobileMenuBtn.style.display = 'block';
        navMenu.style.display = 'none';
      } else {
        mobileMenuBtn.style.display = 'none';
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = '';
        navMenu.style.top = '';
        navMenu.style.left = '';
        navMenu.style.right = '';
        navMenu.style.backgroundColor = '';
        navMenu.style.boxShadow = '';
        navMenu.style.padding = '';
        navMenu.style.zIndex = '';
        navMenu.style.alignItems = 'center';
        this.isMenuOpen = false;
        mobileMenuBtn.textContent = '☰';
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  }
}
