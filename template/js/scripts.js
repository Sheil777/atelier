$(document).ready(
    function(){
        $('.header__burger, .close-phone-menu').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('header').toggleClass('phone');
                $('.close-phone-menu').toggleClass('active');
                $('body').toggleClass('lock');
            }
        );

        /*
        <div class="templates-main__item templates-item">
            <div class="templates-item__img">
                <img src="./template/img/templates/1-full.jpg" alt="Landing vr.1">
            </div>
            <div class="templates-item__name">Landing vr.1</div>
        </div>
        */


        /* Заполнение карточек в template */
        /*
        const arr = Array (
            ["./template/img/templates/1-full.jpg",
            "Landing vr.1"],
            ["./template/img/templates/2-full.jpg",
            "Landing vr.2"]
        )
        
        arr.forEach(element => {
            let div = $("<div class='templates-main__item templates-item'>")
            let divImg = $("<div class='templates-item__img'></div>")

            div.append(divImg)

            let img = document.createElement("img")
            img.setAttribute("src", element[1])

            console.log(div)
        });
        */
    }
);
