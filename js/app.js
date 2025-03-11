const $photoItems = document.querySelectorAll('.photo-item');
const $links = document.querySelectorAll('a');
const $closeBtn = document.querySelector('.close-btn');
const $modalContainer = document.querySelector('.modal-container');
const $searchBtn = document.querySelector('#search');

console.log($searchBtn);

// ARROWS
const $arrowLeft = document.querySelector('.left-arrow');
const $arrowRight = document.querySelector('.right-arrow');

let currentPhotoIndex = 0;

$links.forEach(link => {
    let parent = link.parentNode;
    while (link.firstChild) {
        parent.insertBefore(link.firstChild, link);
    }
    parent.removeChild(link);
})

$photoItems.forEach((photoItem, index) => {
    photoItem.addEventListener('click', function(e) {
        currentPhotoIndex = index;
        showModal(currentPhotoIndex);
    });
})

function showModal(index) {
    $modalContainer.classList.remove('hidden');
    var img = $photoItems[index].querySelector('img');
    var imgSrc = img.src;
    $modalContainer.querySelector('img').src = imgSrc;

    // Show/hide arrows
    if (index === 0) {
        $arrowLeft.style.display = 'none';
    } else {
        $arrowLeft.style.display = 'block';
    }

    if (index === $photoItems.length - 1) {
        $arrowRight.style.display = 'none';
    } else {
        $arrowRight.style.display = 'block';
    }
}

$arrowLeft.addEventListener('click', function() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex = currentPhotoIndex - 1;
        showModal(currentPhotoIndex);
    }
})

$arrowRight.addEventListener('click', function() {
    if (currentPhotoIndex < $photoItems.length - 1) {
        currentPhotoIndex = currentPhotoIndex + 1;
        showModal(currentPhotoIndex);
    }
})

document.addEventListener('keyup', function(e) {
    if ($modalContainer.classList.contains('hidden') === false) {
        // Left arrow key
        if (e.keyCode === 37) {
            if (currentPhotoIndex > 0) {
                currentPhotoIndex = currentPhotoIndex - 1;
                showModal(currentPhotoIndex);
            }
        }
        // Right arrow key
        if (e.keyCode === 39) {
            if (currentPhotoIndex < $photoItems.length - 1) {
                currentPhotoIndex = currentPhotoIndex + 1;
                showModal(currentPhotoIndex);
            }
        }
    }
})

$closeBtn.addEventListener('click', function(e) {
    $modalContainer.classList.add('hidden');
})

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        $modalContainer.classList.add('hidden');
    }
})

$searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var searchTerm = $searchInput.value.toLowerCase();
    
    $photoItems.forEach(function(item) {
        var img = item.querySelector('img');
        var alt = img.alt.toLowerCase();
        
        if (alt.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
})