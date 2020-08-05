const addressForm = document.querySelector(".addressForm");
const inputAddress = document.querySelector(".inputAddress");
var address = "";

function handleSubmit(event){
    event.preventDefault();
    address = inputAddress.value;
    inputAddress.value="";
    searchAddressToCoordinate(address);
}



function searchAddressToCoordinate(address) {
  naver.maps.Service.geocode({
    query: address
  }, function(status, response) {
    if (status === naver.maps.Service.Status.ERROR) {
      if (!address) {
        return alert('Geocode Error, Please check address');
      }
      return alert('Geocode Error, address:' + address);
    }

    if (response.v2.meta.totalCount === 0) {
      return alert('No result.');
    }

    var htmlAddresses = [],
      item = response.v2.addresses[0],
      point = new naver.maps.Point(item.x, item.y);

    if (item.roadAddress) {
      htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
    }

    if (item.jibunAddress) {
      htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
    }


    infoWindow.setContent([
      '<div style="padding:10px;min-width:200px;line-height:150%;">',
      '<h4 style="margin-top:5px;">검색 주소 : '+ address +'</h4><br />',
      htmlAddresses.join('<br />'),
      '</div>'
    ].join('\n'));

    map.setCenter(point);
    infoWindow.open(map, point);
  });
}




