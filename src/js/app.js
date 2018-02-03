import './../css/common.css';
import './../css/index.less';

const THREE = require('three');

// //新建一个场景  
// var scene = new THREE.Scene();
// //新建相机——（视场角，窗口的纵横比，近裁剪面，远裁剪面）  
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //添加渲染器  
// var renderer = new THREE.WebGLRenderer();
// //设置清除颜色，默认是纯黑色  
// renderer.setClearColor('#FFFFFF');
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// // debugger;
// //几何体  
// var geometry = new THREE.CubeGeometry(1, 1, 1);
// //添加材质  
// var material = new THREE.MeshBasicMaterial({ color: 0x0FFFFF });
// //组成最终的网格  
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// //增加一个小球  
// var geometry_1 = new THREE.SphereGeometry(1, 32, 32);
// var material_1 = new THREE.MeshBasicMaterial({ color: 0x0FFFFF });
// var sphere = new THREE.Mesh(geometry_1, material_1);
// scene.add(sphere);
// //控制小球的运动方向  
// var bLeft = false;

// camera.position.z = 10;
// //渲染函数  
// const render = () => {
//   requestAnimationFrame(render);
//   cube.rotation.x += 0.1;
//   //通过场景和相机就能渲染出来  
//   if (bLeft) {
//     sphere.position.x -= 0.1;
//   }
//   else {
//     sphere.position.x += 0.1;
//   }
//   if (sphere.position.x > 5) {
//     bLeft = true;
//   }
//   else if (sphere.position.x < -5) {
//     bLeft = false;
//   }
//   renderer.render(scene, camera);
// }
// render();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: '#ff0000'
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var render = function () {
  requestAnimationFrame(render);

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

render();


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
$("#WebGL-output").append(renderer.domElement);
//创建几何体
var geometry = new THREE.Geometry();
//创建线条的材质并定义两种颜色
var material = new THREE.LineBasicMaterial({ vertexColors: true }, 5);
var color1 = new THREE.Color(0x0000ff), color2 = new THREE.Color(0xff0000);
//线的颜色可以由2点的颜色决定
var p1 = new THREE.Vector3(-2, 0, -2);
var p2 = new THREE.Vector3(2, 0, 2);
//将点加到几何体的顶点集合内
geometry.vertices.push(p1);
geometry.vertices.push(p2);
//为几何体上色
geometry.colors.push(color1, color2);
//定义一条线段，并添加到场景里
var line = new THREE.Line(geometry, material, THREE.LinePieces);
scene.add(line);
camera.position.z = 5;
renderer.render(scene, camera);