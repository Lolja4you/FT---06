import NavLink from "../atoms/nav_link.js";

function NavBar() {
    const navBarParentElement = document.querySelector('#nav-bar');
    navBarParentElement.classList.add('navbar', 'navbar-expand-lg', 'bg-dark');
    navBarParentElement.appendChild(NavLink({ children: 'main', url: '#/' }));
    navBarParentElement.appendChild(NavLink({ children: 'about us', url: '#/about' }));
    navBarParentElement.appendChild(NavLink({ children: 'conact', url: '#/contact' }));
  }
  
export default NavBar;