
function init() {
    let map = new ymaps.Map('map-test', {
        center: [52.85258606076538,87.20091925000006],
        zoom: 3
    });

    let placemark = new ymaps.Placemark([43.6769142, 40.2809639], {}, {

    });

    map.geoObjects.add(placemark);
    //map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);