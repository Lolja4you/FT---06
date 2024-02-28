import NavLink_2_0 from "../atoms/nav_link_api2_0.js";

function NavActors({is_main}) {
  const navBarParentElement = document.querySelector('#nav-actors');
  if (!is_main){
      navBarParentElement.innerHTML = " "
    } else{
    navBarParentElement.innerHTML = " "
    navBarParentElement.innerHTML += `
    ${NavLink_2_0({children:'Бред Питт', url:'#/brad-pitt'})}
    ${NavLink_2_0({children:'Райн Гусля', url:'#/Rayan-gosling'})}
    ${NavLink_2_0({children:'Амбер Херд', url:'#/Amber-Heard'})}
    ${NavLink_2_0({children:'Сильвестр Столовый', url:'#/Sylvester-stallone'})}
    ${NavLink_2_0({children:'Джейсон Стейтем', url:'#/Jason-statham'})}
    ${NavLink_2_0({children:'Кара Делевинь', url:'#/Cara-Delevingne'})}
    ${NavLink_2_0({children:'Елон Маск', url:'#/Elon-Musk'})}
    `;
    }
    return ' '
}

export default NavActors;