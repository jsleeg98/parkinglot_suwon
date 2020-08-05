var mapOptions = {
    center: new naver.maps.LatLng(37.2664398,126.997219),
    zoom: 15,
    zoomControl : 'true',
    zoomControlOptions : {
        position : naver.maps.Position.LEFT_BOTTOM
    }
};



function showMarker(lat, lng){
    var marker = new naver.maps.Marker({
        position : new naver.maps.LatLng(lat,lng),
        map : map
    });
}

var infoWindow = new naver.maps.InfoWindow();


var map = new naver.maps.Map('map', mapOptions);