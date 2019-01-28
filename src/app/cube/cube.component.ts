import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { Mesh } from 'three';


@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CubeComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  scene : THREE.Scene;
  camera : THREE.PerspectiveCamera;
  geometry : THREE.TorusGeometry;
  material : THREE.MeshBasicMaterial;
  lambert : THREE.MeshLambertMaterial;
  mesh : THREE.Mesh;
  renderer : THREE.WebGLRenderer;
  rotationx : number = 90;
  rotationy : number = 0;

  // colorArray : string[] = ['white', 'blue', 'green', 'magenta', 'yellow', 'lime', 'teal', 'steelblue'];
  // cIndex : number = 0;


  tex : THREE.Texture;

  constructor() {
   }

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 30 );
    this.camera.position.z = 10;
    this.camera.position.x = 5;
    this.camera.position.y = -6.5;
    // this.camera.rotateZ(Math.random()*10);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.tex = THREE.ImageUtils.loadTexture('./assets/tunnelTex3.jpg');
    this.tex.wrapT = THREE.MirroredRepeatWrapping;
    this.tex.wrapS = THREE.MirroredRepeatWrapping;
    this.tex.repeat.set(2,2);

    this.geometry = new THREE.TorusGeometry(10, 4, 50, 100);
    this.material = new THREE.MeshBasicMaterial({
      // color: 0x1cac78, slateish blue
      color: 'steelblue',
      alphaMap: this.tex,
      aoMapIntensity: 2,
      transparent: true,
      side: THREE.BackSide,
      fog: true,
      name: 'cloud_mat'
    });
    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.mesh.rotation.x = this.rotationx;
    this.mesh.rotation.y = this.rotationy;
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
     });
    document.body.appendChild( this.renderer.domElement );
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    // this.setupMouseHooks();
    this.animate();
}

  public animate(): void {
    requestAnimationFrame(() => { this.animate() } );
    // this.mesh.rotation.x += .01;
    // this.mesh.rotation.y += .01;
    // if(Math.random() > .95) {
    //   this.material.color.set(new THREE.Color(this.colorArray[this.cIndex]));
    //   if(this.cIndex > this.colorArray.length) this.cIndex = 0; this.cIndex++;
    // }
    this.mesh.rotateZ(.0075);
    this.renderer.render( this.scene, this.camera );
  }

  setupMouseHooks() : void {
    this.renderer.domElement.addEventListener('mousemove', (e : MouseEvent) => {
      // this.rotationx = e.movementX*.005;
      // this.rotationy = e.movementY*.005;
    })

    this.renderer.domElement.addEventListener('mousedown', (e : MouseEvent) => {
      this.rotationx = 0;
      this.rotationy = 0;
      this.animate();
    });
  }

}
