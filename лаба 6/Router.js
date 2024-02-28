// 
// блок компонентов
// 
import NavActors from "./componets/molecules/nav_actors.js";
import MainActorsPage from "./componets/organisms/actors/MainActorsPage.js";

// 
// 
// 


// Определяем функцию для обработки изменения хеша в URL
export function JSRouter() {
    // Получаем текущий хеш
    const current_route = window.location.hash;
  
    // Определяем контент для каждого маршрута
    let content = `${NavActors({is_main : true})}<h1>Главная страницa</h1>`;
    let mem = '<h1>404</h1>'
    if (current_route === '#/') {
      content = `${NavActors({is_main : true})}<h1>Главная страницa</h1>`;
    } else if (current_route === '#/about') {
      content = `${NavActors({is_main : false})}<h1>О нас</h1>`;
    } else if (current_route === '#/contact') {
      content = `${NavActors({is_main : false})}<h1>Контакты</h1>`;
    } else if (current_route === '#/brad-pitt') {
      content = '<h1>Бред Питт</h1>';
    } else if (current_route === '#/Rayan-gosling') {
      content = '<h1>Райн Гусля</h1>';
    } else if (current_route === '#/Amber-Heard') {
      content = '<h1>Амбер Херд</h1>';
    } else  if (current_route === '#/Sylvester-stallone') {
      content = '<h1>Сильвестр Столовый</h1>';
    } else if (current_route === '#/Jason-statham') {
      content = '<h1>Джейсон Стейтем</h1>';
    } else if (current_route === '#/Cara-Delevingne') {
      content = MainActorsPage();
    } else if (current_route === '#/Elon-Musk') {
      content = '<h1>Елон Маск</h1>';
    } else {
      content = `${mem}`;
    }
  
    // Обновляем содержимое элемента с id "content"
    document.getElementById('content').innerHTML = content;
  }
  
  // Добавляем обработчик события для изменения хеша
  window.addEventListener('hashchange', JSRouter);

export function navigateTo(url) {
  window.location.hash = url;
  JSRouter();
}