var positions = [
  {
    text: "디에센셜하우스",
    latlng: new kakao.maps.LatLng(35.15009091812892, 126.92654149761697),
  },
  {
    text: "필리아커피",
    latlng: new kakao.maps.LatLng(35.15009091812892, 126.92654149761697),
  },
  {
    text: "가젤",
    latlng: new kakao.maps.LatLng(35.14938858234015, 126.92862258397057),
  },
  {
    text: "피플펄슨",
    latlng: new kakao.maps.LatLng(35.14999268045128, 126.9227412551352),
  },
  {
    text: "데코드",
    latlng: new kakao.maps.LatLng(35.185833519813634, 126.82829961280665),
  },
  {
    text: "양지바른",
    latlng: new kakao.maps.LatLng(35.137842497203664, 126.91531060911225),
  },
  {
    text: "딥그레이",
    latlng: new kakao.maps.LatLng(35.21684824514957, 126.8443770128077),
  },
  {
    text: "까브",
    latlng: new kakao.maps.LatLng(35.142860783139774, 126.91550897047594),
  },
  {
    text: "카페1890",
    latlng: new kakao.maps.LatLng(35.13906954098661, 126.91450176678265),
  },
  {
    text: "메종드오브제",
    latlng: new kakao.maps.LatLng(35.14348810824845, 126.85033152445314),
  },
  {
    text: "캄파니아",
    latlng: new kakao.maps.LatLng(35.148358385657495, 126.94262358227337),
  },
  {
    text: "알뤼르",
    latlng: new kakao.maps.LatLng(35.172953848560844, 126.88354288212456),
  },
  {
    text: "Lounge OIC",
    latlng: new kakao.maps.LatLng(35.21561699091267, 126.84854753979631),
  },
  {
    text: "닥터찰스",
    latlng: new kakao.maps.LatLng(35.204993842464425, 126.81599061127415),
  },
  {
    text: "반헤이브",
    latlng: new kakao.maps.LatLng(35.23887852801835, 126.89523302641454),
  },
  {
    text: "도지커피",
    latlng: new kakao.maps.LatLng(35.11893769560802, 126.85745442827653),
  },
  {
    text: "Atrio",
    latlng: new kakao.maps.LatLng(35.08945906446311, 126.84481692642352),
  },
  {
    text: "카페얀",
    latlng: new kakao.maps.LatLng(35.150633861448746, 126.92204946885614),
  },
  {
    text: "카페지즈",
    latlng: new kakao.maps.LatLng(35.13058529406719, 126.94591525350987),
  },
  {
    text: "하논",
    latlng: new kakao.maps.LatLng(35.21827795118063, 126.84428015351244),
  },
  {
    text: "비록커피",
    latlng: new kakao.maps.LatLng(35.19555289534613, 126.8942145840754),
  },

  {
    text: "소쿱",
    latlng: new kakao.maps.LatLng(35.15003461131542, 126.92115019571605),
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
    center: new kakao.maps.LatLng(35.173037174279024, 126.88503695353455), // 지도의 중심좌표
    level: 9, // 지도의 확대 레벨
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
