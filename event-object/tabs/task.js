const tabContainers = document.querySelectorAll('.tabs');

tabContainers.forEach(function (container) {
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.tab__content');

    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('tab_active');
            });

            tab.classList.add('tab_active');

            contents.forEach(function (content) {
                content.classList.remove('tab__content_active');
            });

            contents[index].classList.add('tab__content_active');
        });
    });
});