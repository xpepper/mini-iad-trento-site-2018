//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
var lon = 46.0749246, lat = 11.1201523, loc = new google.maps.LatLng(lon, lat);

var myOptions = {
    zoom: 13,
    center: loc,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [{"featureType":"water","stylers":[{"color":"#009BC2"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
      position: loc,
      map: map,
      url: 'https://www.google.com/maps/@46.067254,11.127862,3a,75y,24.13h,86.31t/data=!3m4!1e1!3m2!1sGkNpCvyPgKVG9Gju0rDMQg!2e0'
   });

google.maps.event.addListener(marker, 'click', function() {
  window.location.href = marker.url;
});