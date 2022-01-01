var mapContainer = document.getElementById('list'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.31837803408221, 126.83315036534452),
        level: 7 // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption);

var positions = [
    //상록구
    {
        title: '리모트 플레이스', 
        latlng: new kakao.maps.LatLng(37.31473610528126, 126.90658171299255)
    },
    {
        title: '컴데이 고데이', 
        latlng: new kakao.maps.LatLng(37.289010838159086, 126.85734698233688)
    },
    {
        title: '모더스 브레드', 
        latlng: new kakao.maps.LatLng(37.31557961802645, 126.89111468599044)
    },
    {
        title: '워커웍', 
        latlng: new kakao.maps.LatLng(37.300198107693674, 126.83823284000898)
    },
    //단원구
    
    //대부도
    {
        title: '허니비치',
        latlng: new kakao.maps.LatLng(37.28783732089819, 126.57480839584413)
    },
    {
        title: '앤틸로프',
        latlng: new kakao.maps.LatLng(37.281826774783745, 126.55382911117248)
    },
    {
        title: '카페루헤',
        latlng: new kakao.maps.LatLng(37.510308153504994, 126.59094390562962)
    },
    {
        title: '카르폰',
        latlng: new kakao.maps.LatLng(37.23639967863782, 126.59315757599805)
    },
    {
        title: '카페 가',
        latlng: new kakao.maps.LatLng(37.28618701591446, 126.57274767121967)
    }
]; //안산
    
// 마커 이미지의 이미지 주소
var imageSrc = "https://ifh.cc/g/VqKAf8.png"; 

for (var i = 0; i < positions.length; i ++) {
    //위치
    var location = positions[i].latlng;

    // 마커 이미지의 이미지 크기
    var imageSize = new kakao.maps.Size(24, 35);     
    // 마커 이미지를 생성
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}
