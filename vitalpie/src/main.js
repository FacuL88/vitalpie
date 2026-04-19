import './App.css'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Services } from './components/Services.js'
import { AppointmentBooking } from './components/AppointmentBooking.js'
import { About } from './components/About.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  
  // Clear any existing content
  app.innerHTML = ''
  
  // Create and render components
  const header = new Header()
  const hero = new Hero()
  const services = new Services()
  const appointmentBooking = new AppointmentBooking()
  const about = new About()
  const contact = new Contact()
  const footer = new Footer()
  
  // Append components to the app
  app.appendChild(header.render())
  app.appendChild(hero.render())
  app.appendChild(services.render())
  app.appendChild(appointmentBooking.render())
  app.appendChild(about.render())
  app.appendChild(contact.render())
  app.appendChild(footer.render())
  
  // Setup responsive functionality after DOM is ready
  setTimeout(() => {
    header.setupResponsive()
    
    // Add smooth scroll behavior for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }, 200)
})
