var positions = [
  {
    text: "카페 허브원",
    latlng: new kakao.maps.LatLng(35.564782452473445, 126.89387076389797),
  },
  {
    text: "섬 온도",
    latlng: new kakao.maps.LatLng(35.29459954033895, 126.7702609990623),
  },
  {
    text: "kafe52",
    latlng: new kakao.maps.LatLng(35.24361748748135, 126.67617606693248),
  },
  {
    text: "아트리움",
    latlng: new kakao.maps.LatLng(35.25082057252043, 126.8659268823884),
  },
  {
    text: "오피먼트",
    latlng: new kakao.maps.LatLng(35.34438765989594, 126.8171771246073),
  },
  {
    text: "아크엉",
    latlng: new kakao.maps.LatLng(35.32342819281356, 126.98183419947316),
  },
  {
    text: "옥담",
    latlng: new kakao.maps.LatLng(35.27180853232236, 126.96870826323101),
  },
  {
    text: "어텐션플리즈",
    latlng: new kakao.maps.LatLng(35.37112998724806, 127.01978011296688),
  },
  {
    text: "",
    latlng: new kakao.maps.LatLng(),
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
    center: new kakao.maps.LatLng(35.45172863844531, 126.81692614171557), // 지도의 중심좌표
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
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
