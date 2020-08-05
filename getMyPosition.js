const getPosBtn = document.querySelector(".getPosition");

function handleSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    map.setCenter(new naver.maps.LatLng(lat,lng));
    
    showMarker(lat,lng);

}

function handleError(){
    alert("위치를 받아올 수 없습니다.");
}

function askForcoords(){
 navigator.geolocation.getCurrentPosition(handleSuccess,handleError,{enableHighAccuracy:true});

}
