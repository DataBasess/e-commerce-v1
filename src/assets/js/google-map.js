 (function($) {
            "use strict";
            var locations = [
            ['<div class="wd_info-contact"><h5>บริษัท มโนรมย์ฟุตแวร์ จำกัด</h5><span style="color: #333;">ที่อยู่ : 225 หมู่ 3 ตำบลคุ้งสำเภา อำเภอมโนรมย์ จังหวัดชัยนาท 17110 <br> <br>เบอร์โทรศัพท์ :  080-234-5678 <br>ไอดีไลน์ : contact@gmail.com</span></div></div></div>', 13.7422737,100.6011265]
            ];

            var map = new google.maps.Map(document.getElementById('map'), {
               zoom: 10,
               scrollwheel: false,
               navigationControl: true,
               mapTypeControl: false,
               scaleControl: false,
               draggable: true,
               styles:[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"hue":"#ffe500"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#9bdffb"},{"visibility":"on"}]}],
               center: new google.maps.LatLng(13.7422737,100.6011265),
               mapTypeId: google.maps.MapTypeId.ROADMAP
           });

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {  

               marker = new google.maps.Marker({ 
                  position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
                  map: map ,
                  icon: 'images/pin01.png?v=1001'
              });


               google.maps.event.addListener(marker, 'click', (function(marker, i) {
                  return function() {
                     infowindow.setContent(locations[i][0]);
                     infowindow.open(map, marker);
                 }
             })(marker, i));
           }
       })(jQuery);