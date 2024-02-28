import { navigateTo } from '../../Router.js';

function NavLink({ children, url }) {
    const navLink = document.createElement('a');
    navLink.textContent = children;
    navLink.href = url;
    navLink.classList.add('nav-link', 'text-white', 'mr-3');
    navLink.addEventListener('click', (event) => {
      event.preventDefault();
      navigateTo(url);
    });
    return navLink;
}


export default NavLink;