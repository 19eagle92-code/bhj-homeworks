const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {

    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');


    valueElement.addEventListener('click', function (event) {
        listElement.classList.toggle('dropdown__list_active');
        event.stopPropagation();
    });

    items.forEach(function (item) {
        const link = item.querySelector('.dropdown__link');

        link.addEventListener('click', function (event) {
            event.preventDefault();
            valueElement.textContent = link.textContent;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown__list_active').forEach(function (list) {
        list.classList.remove('dropdown__list_active');
    });
});