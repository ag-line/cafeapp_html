var positions = [
  {
    text: "서목",
    latlng: new kakao.maps.LatLng(34.7207835599887, 127.70358106691769),
  },
  {
    text: "라피끄",
    latlng: new kakao.maps.LatLng(34.69669856955989, 127.77874802775713),
  },
  {
    text: "모이핀",
    latlng: new kakao.maps.LatLng(34.687863600855586, 127.77910795981198),
  },
  {
    text: "드우붓",
    latlng: new kakao.maps.LatLng(34.60231475697453, 127.5419388282883),
  },
  {
    text: "프롬나드",
    latlng: new kakao.maps.LatLng(34.718960053154845, 127.7450280110969),
  },
  {
    text: "하이마레",
    latlng: new kakao.maps.LatLng(34.737611963328156, 127.74231092644105),
  },
  {
    text: "레인블러",
    latlng: new kakao.maps.LatLng(34.75295863313856, 127.74463252804827),
  },
  {
    text: "피읖카페",
    latlng: new kakao.maps.LatLng(34.71333148440758, 127.76417712644043),
  },
  {
    text: "세이모커피",
    latlng: new kakao.maps.LatLng(34.947276858922486, 127.49803536877519),
  },
  {
    text: "",
    latlng: new kakao.maps.LatLng(),
  },
  {
    text: "",
    latlng: new kakao.maps.LatLng(),
  },
];
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(34.812818276202286, 127.62714834516453), // 지도의 중심좌표
    level: 10, // 지도의 확대 레벨
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
map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);
