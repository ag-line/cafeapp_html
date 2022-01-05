/*var positions = [
  {
    text: "리모트 플레이스",
    latlng: new kakao.maps.LatLng(37.31473610528126, 126.90658171299255),
  },
];*/
var mapContainer = document.getElementById("bucheon_map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.505509133588426, 126.78265471317141), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
  };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커를 생성
/*for (var i = 0; i < positions.length; i++) {
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].text, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  });
}*/

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);