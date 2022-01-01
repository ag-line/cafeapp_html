// 마커
var markerPosition  = new kakao.maps.LatLng(location); //마커표시위치
var marker = new kakao.maps.Marker({
    position: markerPosition
}); // 마커 생성
marker.setMap(map); // 지도 위에 표시되도록 설정

//인포윈도우 
var iwPosition = new kakao.maps.LatLng(location); //인포윈도우 표시 위치
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});  // 인포윈도우 생성
infowindow.open(map, marker); //지도위에 인포윈도우 표시되도록 설정