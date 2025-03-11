const $photoItems = document.querySelectorAll('.photo-item');
const $links = document.querySelectorAll('a');
const $closeBtn = document.querySelector('.close-btn');
const $modalContainer = document.querySelector('.modal-container');

// ARROWS
const $arrowLeft = document.querySelector('.left-arrow');
const $arrowRight = document.querySelector('.right-arrow');

$links.forEach(link => {
    const parent = link.parentNode;
    while (link.firstChild) {
        parent.insertBefore(link.firstChild, link);
    }
    parent.removeChild(link);
});


$photoItems.forEach(function (photoItem) {
    photoItem.addEventListener('click', function (e) {
        $modalContainer.classList.remove('hidden');
        const imgSrc = photoItem.querySelector('img').src;
        $modalContainer.querySelector('img').src = imgSrc;
    });
});

$closeBtn.addEventListener('click', function (e) {
    $modalContainer.classList.add('hidden');
});