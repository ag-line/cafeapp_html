var positions = [
  //왕십리
  {
    text: "레벨 커피바",
    latlng: new kakao.maps.LatLng(37.56508598842509, 127.03392278235067),
  },
  {
    text: "거무티티",
    latlng: new kakao.maps.LatLng(37.55893547058746, 127.04041049769435),
  },
  {
    text: "커피거래소",
    latlng: new kakao.maps.LatLng(37.5664189140796, 127.03254608420228),
  },
  {
    text: "키커피컴퍼니",
    latlng: new kakao.maps.LatLng(37.55878102165474, 127.0374350823505),
  },
  {
    text: "뜨아아커피집",
    latlng: new kakao.maps.LatLng(37.5603842773866, 127.03483667864724),
  },
  {
    text: "인더매스",
    latlng: new kakao.maps.LatLng(37.565542661308626, 127.03986541303833),
  },
  {
    text: "바코드커피",
    latlng: new kakao.maps.LatLng(37.56246868658516, 127.03068189769444),
  },
  //건대
  {
    text: "트리스트",
    latlng: new kakao.maps.LatLng(37.54310002631606, 127.06725294438725),
  },
  {
    text: "카페26",
    latlng: new kakao.maps.LatLng(37.55988230688805, 127.0715736806018),
  },
  {
    text: "포인트",
    latlng: new kakao.maps.LatLng(37.54472834651688, 127.07303082467824),
  },
  {
    text: "옹근달",
    latlng: new kakao.maps.LatLng(37.54290896548598, 127.05306079954543),
  },
  {
    text: "카페러슬",
    latlng: new kakao.maps.LatLng(37.54878881007058, 127.08557531303782),
  },
  {
    text: "마우스래빗",
    latlng: new kakao.maps.LatLng(37.54213906785802, 127.07114027070946),
  },
  {
    text: "오알피하우스",
    latlng: new kakao.maps.LatLng(37.54414860217701, 127.07011349769388),
  },
  //성수
  {
    text: "EERT",
    latlng: new kakao.maps.LatLng(37.547565813001626, 127.04108934187384),
  },
  {
    text: "어니언",
    latlng: new kakao.maps.LatLng(37.544924565936434, 127.05805426515457),
  },
  {
    text: "코사이어티",
    latlng: new kakao.maps.LatLng(37.54497443916265, 127.04565004002201),
  },
  {
    text: "우디집",
    latlng: new kakao.maps.LatLng(37.53778175138863, 127.05097388234982),
  },
  {
    text: "텅플래닛",
    latlng: new kakao.maps.LatLng(37.5424252461442, 127.05652036885795),
  },
  {
    text: "엘파티오",
    latlng: new kakao.maps.LatLng(37.543810415220356, 127.05058752652972),
  },
  {
    text: "할아버지공장",
    latlng: new kakao.maps.LatLng(37.54122819989222, 127.0547758516624),
  },
  {
    text: "서울앵무새",
    latlng: new kakao.maps.LatLng(37.548441298399055, 127.0435010111862),
  },
  {
    text: "looop",
    latlng: new kakao.maps.LatLng(37.54447394724255, 127.05205919769382),
  },
  {
    text: "연무장",
    latlng: new kakao.maps.LatLng(37.54314491282611, 127.0533217553657),
  },
  {
    text: "루디먼트",
    latlng: new kakao.maps.LatLng(37.54687837901271, 127.0544881823501),
  },
  {
    text: "LCDC",
    latlng: new kakao.maps.LatLng(37.541773533897114, 127.06145469769373),
  },
  {
    text: "필살기",
    latlng: new kakao.maps.LatLng(37.54844432340375, 127.04848024002212),
  },
  {
    text: "구욱희씨",
    latlng: new kakao.maps.LatLng(37.54729385836595, 127.04186162467833),
  },
  {
    text: "Arco",
    latlng: new kakao.maps.LatLng(37.545080545512064, 127.05354275536587),
  },
  {
    text: "텍스쳐 성수",
    latlng: new kakao.maps.LatLng(37.547019169427436, 127.04010616700643),
  },
  {
    text: "칸토",
    latlng: new kakao.maps.LatLng(37.54357461575858, 127.0514150670063),
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
    center: new kakao.maps.LatLng(37.552897910611186, 127.06415347077477), // 지도의 중심좌표
    level: 7, // 지도의 확대 레벨
  };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커를 생성
for (var i = 0; i < positions.length; i++) {
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions.text,
  });
  /*var infowindow = new kakao.maps.InfoWindow({
    position: positions[i].latlng,
    content: positions[i].text,
  });
  infowindow.open(map, marker);*/
}
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);
