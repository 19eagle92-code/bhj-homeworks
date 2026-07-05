// Функция проверки видимости элемента
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();

    const isVisible = (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
    );

    return isVisible;
}

// Функция проверки всех элементов с классом .reveal
function checkVisibility() {
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(function (element) {
        if (isElementVisible(element)) {
            element.classList.add('reveal_active');
        } else {
            // крываем для появления при обратной прокрутке
            element.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);