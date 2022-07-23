let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  lazy: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
ymaps.ready(init);

var myMap;

function init () {
    // Инициализация вкладок.
    // После исполнения команды tabs() tab-2 получит style='display:none'.
    // Карта будет инициализирована, но будет иметь нулевой размер.
    // В данном случае это хорошо, так как невидимая карта не будет загружать невидимые тайлы.
    $('#tabs').tabs();
    myMap = new ymaps.Map('tab-2', {
        center: [55.775284, 37.657302], // Москва
        zoom: 18
    });

    // В момент показа новой вкладки будем пересчитывать размер карты.
    // Карта примет максимально возможные значения при активации ее таба
    // и нулевые, как только будет выбран первый таб.
    // Подписываемся на событие 'tabsshow' (а не 'tabselect',
    // так как требуется, чтобы элемент с картой уже был виден).
    $('#tabs').bind('tabsshow', function (event, ui) {
        myMap.container.fitToViewport();
    });
        myMap.geoObjects
        .add(new ymaps.Placemark([55.750274, 37.668296], {
            balloonContent: '<strong>УКИТ</strong> цвет'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#cd0007'
        }))
            .add(new ymaps.Placemark([55.775284, 37.657302], {
            balloonContent: '<strong>Бургер Кинг</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        $('#tabs').bind('tabsshow', function (event, ui) {
        myMap.container.fitToViewport();
    });
        myMap.geoObjects
        var myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [55.775284, 37.657302],
        // Радиус круга в метрах.
        100
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        balloonContent: "Радиус доставки",
        // Содержимое хинта.
        hintContent: "Подвинь меня"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 5
    });

    // Добавляем круг на карту.
    myMap.geoObjects.add(myCircle);
}