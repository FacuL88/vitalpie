export function renderHeader() {
    const header = document.querySelector('.header');
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.innerHTML = `
        <ul>
            <li>home</li>
            <li>nosotros</li>
            <li>contacto</li>
        </ul>
    `;
    
    header.appendChild(nav);

}