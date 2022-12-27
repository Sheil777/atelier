let arrLang = {
    "en": {
        "menu-overview": "Overview",
        "menu-pages": "Pages",
        "menu-portfolio": "Portfolio",
        "menu-template": "Template",
        "menu-contact": "Contact",
        "buy-template": "Buy Template"
    },
    "ru": {
        "menu-overview": "Обзор",
        "menu-pages": "Страницы",
        "menu-portfolio": "Портфолио",
        "menu-template": "Шаблоны",
        "menu-contact": "Контакты",
        "buy-template": "Купить шаблон"
    },
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
    })

    // Закрытие окна
    $(".translate__close").click(function(){
        $(".translate").addClass("translate_hide");
    })
}
);