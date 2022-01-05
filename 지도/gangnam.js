var positions = [
  {
    text: "로그",
    latlng: new kakao.maps.LatLng(37.50614302305655, 127.04065299768696),
  },
  {
    text: "포스톤즈 커피로스터스",
    latlng: new kakao.maps.LatLng(37.50998516688594, 127.06392562467178),
  },
  {
    text: "쿠오레에스프레소",
    latlng: new kakao.maps.LatLng(37.48802171618417, 127.03197289768649),
  },
  {
    text: "아러바우트",
    latlng: new kakao.maps.LatLng(37.52055348715516, 127.02313558234394),
  },
  {
    text: "R'cafe",
    latlng: new kakao.maps.LatLng(37.526354890147324, 127.0394601823441),
  },
];
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.50063779607012, 127.03625854522855), // 지도의 중심좌표
    level: 7, // 지도의 확대 레벨
  };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커를 생성
for (var i = 0; i < positions.length; i++) {
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].text, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  });
}

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
