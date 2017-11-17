import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-tunnel',
  templateUrl: './tunnel.component.html',
  styleUrls: ['./tunnel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TunnelComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  scene : THREE.Scene;
  camera : THREE.PerspectiveCamera;
  geometry : THREE.CylinderGeometry;
  material : THREE.MeshNormalMaterial;
  mesh : THREE.Mesh;
  renderer : THREE.WebGLRenderer;
  texture : THREE.Texture;
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {

    this.initCanvas();

    this.animate();
  }

  initCanvas() : void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scene = new THREE.Scene;

    this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, .01, 1000);
    this.camera.position.set(0,0,7);
    // this.camera.lookAt(this.scene.position);
    // this.scene.add(this.camera);

    let light1	= new THREE.DirectionalLight( 0xff8000, 1.5 );
    light1.position.set( 1, 1, 0 ).normalize();
    this.scene.add( light1 );
    
    let light2	= new THREE.DirectionalLight( 0xff8000, 1.5 );
    light2.position.set( -1, 1, 0 ).normalize();
    this.scene.add( light2 );
    
    let light3	= new THREE.PointLight( 0x44FFAA, 15, 25 );
    light3.position.set( 0, -3, 0 );
    this.scene.add( light3 );
    
    let light4	= new THREE.PointLight( 0xff4400, 20, 30 );
    light4.position.set( 3, 3, 0 );
    this.scene.add( light4 );

    this.scene.fog = new THREE.FogExp2(0x00000, 0.15);

    this.geometry = new THREE.CylinderGeometry(1,1,30,32,1,true);
    this.texture = new THREE.TextureLoader().load('../../assets/tunnelTex.jpeg', () => { 
      console.log("texture loaded"); 
      this.texture.wrapT = THREE.RepeatWrapping;
      this.material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, map: this.texture });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.rotation.x = Math.PI/2;
      this.scene.add(this.mesh);
    });

    this.renderer = new THREE.WebGLRenderer( {
      antialias: true
    });
    this.renderer.setSize(this.width, this.height);
    document.body.appendChild(this.renderer.domElement);
  }

  ngAfterViewInit() : void {
    this.renderer.setSize(this.width, this.height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() : void {
    requestAnimationFrame(() => { this.animate(); })
    this.texture.offset.y += .008;
    this.texture.offset.x %= 1;
    this.texture.needsUpdate = true;

    let seconds = Date.now() / 1000;
    let radius = .70;
    let angle = Math.sin(0.75 * seconds * Math.PI) / 4;

    this.camera.position.x = Math.cos(angle - Math.PI/2) * radius;
    this.camera.position.y = Math.sin(angle - Math.PI/2) * radius;
    this.camera.position.z = angle;

    this.renderer.render(this.scene, this.camera);
  }

}
