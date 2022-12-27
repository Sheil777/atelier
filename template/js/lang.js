let arrLang = {
    "en": {
        "menu-overview": "Overview",
        "menu-pages": "Pages",
        "menu-portfolio": "Portfolio",
        "menu-template": "Template",
        "menu-contact": "Contact",
        "buy-template": "Buy Template",
        "main-up": "WE ARE Atelier Creative Agency",
        "main-text": "Unique UI Kit Template for Creative Agencies"
    },
    "ru": {
        "menu-overview": "Обзор",
        "menu-pages": "Страницы",
        "menu-portfolio": "Портфолио",
        "menu-template": "Шаблоны",
        "menu-contact": "Контакты",
        "buy-template": "Купить шаблон",
        "main-up": "Мы креативное агенство Atelier",
        "main-text": "Уникальные шаблоны пользовательского интерфейса для креативных агентств"
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
        let langID = $(this).attr('id');

        $(".lang").each((i,el) => {
            $(el).text(arrLang[langID][$(el).attr('key')]);
        });
        
        // Смена цвета кнопки
        $(".lang-but").css('color', 'white');
        $(this).css('color', 'gold');

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