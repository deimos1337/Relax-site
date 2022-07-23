ymaps.ready(init);

var myMap;

function init () {
    $('#tabs').tabs();
    myMap = new ymaps.Map('tab-2', {
        center: [55.734826, 37.828263],
        zoom: 16
    });
    $('#tabs').bind('tabsshow', function (event, ui) {
        myMap.container.fitToViewport();
    });
        myMap.geoObjects
        .add(new ymaps.Placemark([55.735033, 37.832306], {
            balloonContent: '<strong>Вешняковская улица, 15к1</strong><p>тел:+7(495) 458-95-81</p>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#cd0007'
        }))
        .add(new ymaps.Placemark([55.733036, 37.825505], {
            balloonContent: '<strong>Аллея Жемчуговой, 5к5</strong><p>тел:+7(495) 328-19-57</p>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#cd0007'
        }))
        .add(new ymaps.Placemark([55.736731, 37.824517], {
            balloonContent: '<strong>Вешняковская улица, 6к3</strong><p>тел:+7(495) 458-95-81</p>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#cd0007'
        }))
}
