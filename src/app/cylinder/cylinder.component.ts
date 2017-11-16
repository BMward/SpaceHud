import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})
export class CylinderComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  mousex: number;
  mousey: number;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  cubeCam: THREE.CubeCamera;
  mesh: THREE.Mesh;
  geometry: THREE.BoxGeometry;
  material: THREE.MeshNormalMaterial;
  time: THREE.Clock;
  tunnelMesh: THREE.Mesh;
  tunnelTexture: THREE.Texture;
  constructor() {
    // setup static assets here
    this.time = new THREE.Clock();

    // Setup the Cylinder/Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 1;
    // var innerColor = 0x2222ff;
    var cubecam = new THREE.CubeCamera(0.1, 120, 256);
    cubecam.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter; // mipmap filter

    this.scene = new THREE.Scene();
    this.scene.add(this.cubeCam);

    // setup some geometry
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    // Build a renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('black', 0); // background

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // Lights
    var light = new THREE.AmbientLight('white'); // soft white light
    this.scene.add(light);

    THREE.ImageUtils.crossOrigin = '';
    this.tunnelTexture = THREE.ImageUtils.loadTexture('https://luigimannoni.github.io/assets/001_electric.jpg');
    this.tunnelTexture.wrapT = this.tunnelTexture.wrapS = THREE.RepeatWrapping;
    this.tunnelTexture.repeat.set(1, 2);

    // Tunnel Mesh
    this.tunnelMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(50, 50, 1024, 16, 32, true),
      new THREE.MeshBasicMaterial({
        color: 'green',
        transparent: true,
        alphaMap: this.tunnelTexture,
        side: THREE.BackSide,
      })
    );
    this.tunnelMesh.rotation.x = this.deg2rad(90);
    this.tunnelMesh.position.z = 128;
    this.scene.add(this.tunnelMesh);

  }

  deg2rad(_degrees): number {
    return (_degrees * Math.PI / 180);
  }


  ngAfterViewInit() {
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  public animate(): void {
    requestAnimationFrame(() => { this.animate() });
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    (<THREE.MeshBasicMaterial>this.tunnelMesh.material).color.setHSL(Math.abs(Math.cos((this.time.getElapsedTime() / 10))), 1, 0.5);
    this.tunnelTexture.offset.y = this.time.getElapsedTime() / 2;
    this.tunnelTexture.offset.x = this.time.getElapsedTime() / 6;
    this.renderer.render(this.scene, this.camera);
  }

  ngOnInit() {
    console.log('on init called')
  }
}
