// Swiper

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        930: {
            slidesPerView: 2,
        },

        1350: {
            slidesPerView: 3,
        },
    }
});


const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        900: {
            slidesPerView: 2,
        },
    }
});

const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        850: {
            slidesPerView: 2,
        },
    }
});

const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        1500: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 2,
        },
    }
});



// Pop-up window

const popup = document.querySelector('.popup')
const applicationButton = document.querySelector('.application-link')
const popupCloseButton = document.querySelector('.popup-close__btn')


applicationButton.addEventListener('click', function() {
    popup.classList.remove('popup-hidden')
})

popupCloseButton.addEventListener('click', function() {
    popup.classList.add('popup-hidden')
})


window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        popup.classList.add('popup-hidden')
    }
})


window.addEventListener('click', function(event) {
    if (event.target === 'popup') {
        popup.classList.add('popup-hidden')
    }
})




// Burger menu

const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuClose = document.querySelector('.burger-menu__close')
const headerList = document.querySelector('.header__list')
const headerLinks = document.querySelectorAll('.header-link')


burgerMenu.addEventListener('click', function() {
    headerList.style.display = 'flex'

    burgerMenuClose.style.display = 'block'


    headerLinks.forEach(link => link.addEventListener('click', function() {
        headerList.style.display = 'none'
        burgerMenuClose.style.display = 'none'
    }))
})


burgerMenuClose.addEventListener('click', function() {
    headerList.style.display = 'none'

    burgerMenuClose.style.display = 'none'
})


window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        headerList.style.display = 'none'
    } if (event.key === 'Escape') {
        burgerMenuClose.style.display = 'none'
    }
})





// More текст

const openButton = document.querySelectorAll('.open-button')
const moreText = document.querySelectorAll('.more')

moreText.forEach(more => {
    more.style.display = 'none'
})

openButton.forEach(button => button.addEventListener('click', function() {
    let findId = document.querySelector('#' + button.dataset.tab)

    if (findId.style.display === 'none') {


        // Закрыть все текста, кроме текущего

        moreText.forEach(more => {
            if (more !== findId) {
                more.style.display = 'none'
            }
        })

        findId.style.display = 'inline-block'
    } else {
        findId.style.display = 'none'
    }
}))