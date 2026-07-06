const tooltipTriggers = document.querySelectorAll('.has-tooltip');

// Функция для создания и позиционирования подсказки
function showTooltip(element) {
    let tooltip = element.querySelector('.tooltip');

    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.title;
        element.appendChild(tooltip);
    }

    tooltip.classList.toggle('tooltip_active');


    if (tooltip.classList.contains('tooltip_active')) {
        const rect = element.getBoundingClientRect();


        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.bottom + 5) + 'px';
    }
}

tooltipTriggers.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        showTooltip(this);
    });
});