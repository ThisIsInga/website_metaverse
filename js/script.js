// - window.addEventListener('load', ...): Запускает код после полной загрузки страницы.
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
//     - setTimeout: Устанавливает задержку на 1000 мс (1 секунду).
//     - После задержки: 
//     - Прелоадер (preloader) скрывается.
//     - Контент (content) становится видимым.
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});



document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.main__burger');
    const menu = document.querySelector('.main__menu-burger');

    // Обработка клика на бургер
    burger.addEventListener('click', function() {
        burger.classList.toggle('main__burger_active'); // Переключаем класс active

        // Проверяем текущее состояние меню
        if (menu.style.display === 'block') {
            menu.style.display = 'none'; // Скрываем меню
        } else {
            menu.style.display = 'block'; // Показываем меню
        }
    });
});



window.replainSettings = { id: 'e8916279-8442-4295-845e-8a385dd5bd0a' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');
