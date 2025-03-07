// Получаем элементы
const viewBtn = document.getElementById('viewBtn');
const fullscreenContainer = document.getElementById('fullscreenContainer');
const closeBtn = document.getElementById('closeBtn');
const fullscreenImage = document.getElementById('fullscreenImage');

// Открыть картину на полный экран
viewBtn.addEventListener('click', function() {
    fullscreenContainer.classList.add('open');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы при открытом полном экране
});

// Закрыть картину
closeBtn.addEventListener('click', function() {
    fullscreenContainer.classList.remove('open');
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку страницы
});

// При клике на картину увеличиваем её
fullscreenImage.addEventListener('click', function() {
    fullscreenImage.style.transform = fullscreenImage.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
});