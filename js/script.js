/**
 * Created by rnixx on 23.01.2015.
 */
ymaps.ready(init);
var myMap,
    myPlacemark;

$(document).ready(function(){
    changeDaySchedulerHandler();
    showMenuByScroll();
});

function changeDaySchedulerHandler() {
    $('.menu.days a').click(function(event) {
        event.preventDefault();
        var day = $(this).data('index');
        $('.scheduler').fadeOut(500);
        $('#day' + day).fadeIn(500);
        $('.menu.days li').removeClass('active');
        $(this).parent().addClass('active');
    })
}

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.79692627698477,37.53789149999998],
        zoom: 16,
        controls: []
    });

    myMap.balloon.open([55.79692627698477,37.53789149999998],
        {
            contentBody: 'Москва, Ленинградский проспект 39, стр. 79<br/>' +
            'Офис "Mail.Ru Group"'
        }
    );

    myMap.geoObjects.add(myPlacemark);
}

function showMenuByScroll() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 80) $('.headersmall').show();
        else $('.headersmall').hide();
    });
}