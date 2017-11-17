import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';


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
  geometry : THREE.BoxGeometry;
  material : THREE.MeshNormalMaterial;
  mesh : THREE.Mesh;
  renderer : THREE.WebGLRenderer;


  constructor() {
   }

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    this.camera.position.z = 1;
  
    this.scene = new THREE.Scene();
  
    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();
  
    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );
  
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    document.body.appendChild( this.renderer.domElement );
  }

  ngAfterViewInit() {
    //this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
}
    
  public animate(): void {
    requestAnimationFrame(() => { this.animate() } );
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render( this.scene, this.camera );
  }

}
