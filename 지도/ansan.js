var positions = [
    {
      text: "리모트 플레이스",
      latlng: new kakao.maps.LatLng(37.31473610528126, 126.90658171299255),
    },
    {
      text: "컴데이 고데이",
      latlng: new kakao.maps.LatLng(37.289010838159086, 126.85734698233688),
    },
    {
      text: "모더스 브레드",
      latlng: new kakao.maps.LatLng(37.31557961802645, 126.89111468599044),
    },
    {
      text: "워커웍",
      latlng: new kakao.maps.LatLng(37.300198107693674, 126.83823284000898),
    },
    {
      text: "행복한 커피 앤 베이커리",
      latlng: new kakao.maps.LatLng(37.31980879606668, 126.82255569768121),
    },
    {
      text: "생과방",
      latlng: new kakao.maps.LatLng(37.31817282626365, 126.83284195350181),
    },
    {
      text: "림커피",
      latlng: new kakao.maps.LatLng(37.32205904085427, 126.83016687973745),
    },
    {
      text: "평소담",
      latlng: new kakao.maps.LatLng(37.33418615245348, 126.78631088891485),
    },
    {
      text: "카페유일",
      latlng: new kakao.maps.LatLng(37.35821769506164, 126.82199696444975),
    },
    {
      text: "허니비치",
      latlng: new kakao.maps.LatLng(37.28783732089819, 126.57480839584413),
    },
    {
      text: "앤틸로프",
      latlng: new kakao.maps.LatLng(37.281826774783745, 126.55382911117248),
    },
    {
      text: "카르폰",
      latlng: new kakao.maps.LatLng(37.23639967863782, 126.59315757599805),
    },
    {
      text: "카페 가",
      latlng: new kakao.maps.LatLng(37.28618701591446, 126.57274767121967),
    },
  ];
  var mapContainer = document.getElementById("ansan_map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.32570665546137, 126.84149591368627), // 지도의 중심좌표
      level: 8, // 지도의 확대 레벨
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