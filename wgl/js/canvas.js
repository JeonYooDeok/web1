var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = 'red';
ctx1.fillRect(150,100,300,200);

/*

ctx1.fillStyle 이게
fillRect 위에 있어야만 색이 칠해짐.(위에 있는 스타일을 가지고 아래에 그리는 것)
fillStyle 아래있는 모든 면에 한꺼번에 적용됨.

fill(); 이나 stroke(); 해줘야 화면에 나타남!

fillRect()는 Rect()+fill() 임. 자주 쓰여서 있는 것.
strokeRect()도 마찬가지.

*/

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0,0);
ctx2.lineTo(600,400);
ctx2.strokeStyle = 'pink';
ctx2.lineWidth = 10;
ctx2.stroke();

var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
ctx3.beginPath();
ctx3.moveTo(50,50);
ctx3.lineTo(50,350);
ctx3.lineTo(250,350);
ctx3.strokeStyle = 'orange';
ctx3.lineWidth = 5;
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(350,50);
ctx3.lineTo(350,350);
ctx3.lineTo(550,350);
ctx3.strokeStyle = 'skyblue';
ctx3.closePath();
ctx3.stroke();

var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');
ctx4.beginPath();
ctx4.arc(300,200,150,0,Math.PI*1.5,false);
ctx4.strokeStyle = 'green';
ctx4.lineWidth = 10;
ctx4.stroke();

var canvas5 = document.getElementById('canvas5');
var ctx5 = canvas5.getContext('2d');
ctx5.beginPath();
ctx5.arc(75,75,50,0,Math.PI*2);
/*
MoveTo로 다음 시작점을 정해주는 것.
*/
ctx5.moveTo(110,75);
ctx5.arc(75,75,35,0,Math.PI);
ctx5.moveTo(65,65);
ctx5.arc(60,65,5,0,Math.PI*2);
ctx5.moveTo(95,65);
ctx5.arc(90,65,5,0,Math.PI*2);
ctx5.stroke();


var canvas7 = document.getElementById('canvas7');
var ctx7 = canvas7.getContext('2d');
var gra1 = ctx7.createLinearGradient(0,0,600,400);
/* 캔버스 기준으로 그라디언트 영역 잡음 */

gra1.addColorStop(0,'red');
gra1.addColorStop(0.5,'white');
gra1.addColorStop(1,'blue');

ctx7.fillStyle = gra1;
ctx7.fillRect(150,100,300,200);
ctx7.clearRect(200,150,50,50);

var canvas8 = document.getElementById('canvas8');
var ctx8 = canvas8.getContext('2d');
ctx8.lineWidth = 20;
ctx8.strokeStyle = gra1;
ctx8.lineWidth = 20;
ctx8.strokeRect(150,100,300,200);
/*
한 문서안에 그라디언트가 생성되어있으면 다른 캔버스에서도 재활용해서 쓸 수 있다.
그라디언트는 뿌려주는 개념이 아니라 생성하는 개념이라 그렇다.

RadialGradient
= 큰원(끝원)에서 작은원(시작원) 뺀 영역에 그라디언트 생김. 안쪽에서 바깥으로 뻗어나감.
*/
var canvas10 = document.getElementById('canvas10');
var ctx10 = canvas10.getContext('2d');
var gra3 = ctx10.createRadialGradient(300,200,50,300,200,200);
gra3.addColorStop(0,'red');
gra3.addColorStop(1,'blue');
ctx10.fillStyle = gra3;
ctx10.fillRect(150,100,300,200);

// jCanvas
$('#canvas11').drawArc({
  fillStyle: 'purple',
  x: 100, y: 100,
  radius: 50
}).drawArc({
  fillStyle: 'blue',
  x: 150, y: 200,
  radius: 80
}).drawArc({
  fillStyle: 'gold',
  x: 300, y: 130,
  radius: 120
});


// three.js
var scene = new THREE.Scene();
// PerspectiveCamera 첫번째 수치값은 작아질수록 물체를 가까이서 보는 것(크게)
			var camera = new THREE.PerspectiveCamera( 50 , canvas10.width / canvas10.height, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( canvas10.width, canvas10.height );
//		document.body.appendChild( renderer.domElement );
			document.getElementById('three').appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry();
			var material = new THREE.MeshBasicMaterial( { color: 'cornflowerblue' } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.03;
				cube.rotation.y += 0.03;

				renderer.render( scene, camera );
			};

			animate();