const tooltipTriggers = document.querySelectorAll('.has-tooltip');

// Переменная для хранения текущей активной подсказки
let activeTooltip = null;

// Функция для скрытия всех подсказок
function hideAllTooltips() {
    document.querySelectorAll('.tooltip_active').forEach(function (tooltip) {
        tooltip.classList.remove('tooltip_active');
    });
    activeTooltip = null;
}

// Функция для создания и позиционирования подсказки
function showTooltip(element) {
    hideAllTooltips();

    let tooltip = element.querySelector('.tooltip');

    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.title;
        element.appendChild(tooltip);
    }

    tooltip.classList.add('tooltip_active');
    activeTooltip = tooltip;

    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 5) + 'px';
}

tooltipTriggers.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();

        const existingTooltip = this.querySelector('.tooltip_active');
        if (existingTooltip) {
            existingTooltip.classList.remove('tooltip_active');
            activeTooltip = null;
            return;
        }

        showTooltip(this);
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.has-tooltip')) {
        hideAllTooltips();
    }
});