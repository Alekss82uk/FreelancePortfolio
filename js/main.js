const btnDarkMode = document.querySelector (".dark-mode-btn");

//1. проверка темной темы системные настройки

if (window.matchMedia && window.matchMedia("(prefert-color-csheme: dark)").matches) {
     btnDarkMode.classList.add("dark-mode-btn--active");
     document.body.classList.add('dark');
}

//2. проверка темной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
     btnDarkMode.classList.add("dark-mode-btn--active");
     document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
     btnDarkMode.classList.remove("dark-mode-btn--active");
     document.body.classList.remove('dark');
}     



// меняем в зависимости от времени для автоматической смены темы в системных настройках компа

window.matchMedia("(prefert-color-csheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    alert('Change!!!')

    if (newColorScheme === 'dark') {
          btnDarkMode.classList.add("dark-mode-btn--active");
          document.body.classList.add('dark');
     } else {
          btnDarkMode.classList.remove("dark-mode-btn--active");
          document.body.classList.remove('dark');
     }
})



// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
     btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
          localStorage.setItem('darkMode', 'dark');
     } else {
          localStorage.setItem('darkMode', 'light');
     }
}

