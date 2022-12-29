let arrLang = {
    "en": {
        "menu-overview": "Overview",
        "menu-pages": "Pages",
        "menu-portfolio": "Portfolio",
        "menu-template": "Template",
        "menu-contact": "Contact",
        "buy-template": "Buy Template",
        "main-up": "WE ARE Atelier Creative Agency",
        "main-text": "Unique UI Kit Template for Creative Agencies",
        "main-button": "VIEW LAYOUTS",
        "our-layouts": "Our Core Layouts",
        "template-pages": "Template Pages"
    },
    "ru": {
        "menu-overview": "Обзор",
        "menu-pages": "Страницы",
        "menu-portfolio": "Портфолио",
        "menu-template": "Шаблоны",
        "menu-contact": "Контакты",
        "buy-template": "Купить шаблон",
        "main-up": "Мы креативное агенство Atelier",
        "main-text": "Уникальные шаблоны пользовательского интерфейса для креативных агентств",
        "main-button": "ПОСМОТРЕТЬ МАКЕТЫ",
        "our-layouts": "Наши основные макеты",
        "template-pages": "Примеры шаблонов"
    },
}

function closeWindowWithLanguages(lang) {
    $(".translate").addClass("translate_hide");
    $(".header__language").addClass("header__language_show");

    if(lang == "ru")
        $(".header__language").text("RUS");
    else
        $(".header__language").text("ENG");
}

$(document).ready(function() {
    // Смена языка
    $(".lang-but").click(function(){     
        let langID = $(this).attr('key');

        // Так как текст на русском языке становится больше
        // делаем ширину блока больше
        if(langID == "ru") {
            $(".main__text").addClass("ru");
        }else{
            $(".main__text").removeClass("ru");
        }

        $(".lang").each((i,el) => {
            $(el).text(arrLang[langID][$(el).attr('key')]);
        });
        
        // Смена цвета кнопки
        $(".lang-but").css('color', 'white');
        $(this).css('color', '#FFAE2B');

        // Закрытие окна
        closeWindowWithLanguages(langID);
    })

    // Закрытие окна
    $(".translate__close").click(function(){
        closeWindowWithLanguages();
    })

    // Открытие окна
    $(".header__language").click(function(){
        $(".translate").removeClass("translate_hide");
        $(".header__language").removeClass("header__language_show");
    })
}
);