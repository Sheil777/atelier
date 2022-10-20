// Объекту, который необходимо анимировать нужно написать класс _scroll-anim 
// Чтобы объект не появлялся при повторном скроле _scroll-anim-no-hide

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const animItems = document.querySelectorAll('._scroll-anim')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_scroll-anim-active")
            } else {
                if (!animItem.classList.contains('_scroll-anim-no-hide'))
                    animItem.classList.remove('_scroll-anim-active')
            }
        }
    }

    setTimeout(function() {
        animOnScroll();
    }, 300);
    animOnScroll();
}

