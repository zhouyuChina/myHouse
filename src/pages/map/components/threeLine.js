const THREE = require('three');
// const Stats = require('../../../components/js/stats');

import Stats from '../../../components/js/stats.js';

export class lineObject {
  constructor() {
    this.stats = new Stats();
    this.step = 0;
  }

  buildModel1() {
    let scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    let renderer = new THREE.WebGLRenderer();

    renderer.setClearAlpha(new THREE.Color(0xEEEEEE, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);

    let axes = new THREE.AxisHelper(20);
    scene.add(axes);

    // create the ground plane
    let planeGeometry = new THREE.PlaneGeometry(46, 20, 1, 10);
    let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15
    plane.position.y = 0
    plane.position.z = 0

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    let cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
    let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // position the cube
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    // add the cube to the scene
    scene.add(cube);

    let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element

    let renderDomElement = renderer.domElement;
    let canvasDom = document.getElementById('canvasFrame');
    canvasDom.appendChild(renderDomElement);

    // render the scene
    renderer.render(scene, camera);
  }

  buildModel2() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    let scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    let renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // create the ground plane
    let planeGeometry = new THREE.PlaneGeometry(60, 20);
    let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15
    plane.position.y = 0
    plane.position.z = 0

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    let cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
    let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;

    // position the cube
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    // add the cube to the scene
    scene.add(cube);

    let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true;

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add spotlight for the shadows
    let spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // add the output of the renderer to the html element
    // $("#WebGL-output").append(renderer.domElement);

    // call the render function
    // renderer.render(scene, camera);

    // this.renderScene();

    let renderDomElement = renderer.domElement;
    let canvasDom = document.getElementById('canvasFrame');
    canvasDom.appendChild(renderDomElement);

    let step = 0;

    let renderScene = () => {
      // console.log("this.stats", this.stats);

      this.stats.update();
      // rotate the cube around its axes
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      cube.rotation.z += 0.02;

      // bounce the sphere up and down
      step += 0.04;
      sphere.position.x = 20 + (10 * (Math.cos(step)));
      sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));

      // render using requestAnimationFrame
      requestAnimationFrame(renderScene);
      renderer.render(scene, camera);

      if (step > 1000) {
        step === 0;
      }
    }

    renderScene();

    console.log('this', this)

    requestAnimationFrame(this.renderScene.bind(this));

  }

  buildModel3() {
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '10px';
    this.stats.domElement.style.top = '10px';
    document.body.appendChild(this.stats.domElement);
  }

  renderScene() {
    this.stats.update();

    // rotate the cube around its axes
    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.02;
    // cube.rotation.z += 0.02;

    // bounce the sphere up and down
    this.step += 0.04;

    // console.log('__this__', this);

    // sphere.position.x = 20 + (10 * (Math.cos(this.step)));
    // sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)));

    // render using requestAnimationFrame
    requestAnimationFrame(this.renderScene.bind(this));
    // renderer.render(scene, camera);
  }
}
