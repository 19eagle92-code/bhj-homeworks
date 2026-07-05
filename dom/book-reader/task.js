const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.font-size');

fontSizeControls.forEach(function (control) {
    control.addEventListener('click', function (event) {
        event.preventDefault();

        fontSizeControls.forEach(function (btn) {
            btn.classList.remove('font-size_active');
        });

        this.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = this.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});