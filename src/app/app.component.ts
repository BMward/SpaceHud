/// <reference path="../../node_modules/@types/three/index.d.ts" />
import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /**
   *
   */
  constructor() {
    window.setTimeout(() => {
      this.initKeyFunctions();    
    }, 1300);
  }


  initKeyFunctions() : void {
    document.addEventListener("keydown", (event) => {
      if(event.key == "ArrowRight") {
        this.PanElementWidth('screen-background', 2);
      };
      if(event.key == "ArrowLeft") {
        this.PanElementWidth('screen-background', -2);
      }
      if(event.key == "ArrowUp") {
        this.PanElementHeight('screen-background', -2);
      }
      if(event.key == "ArrowDown") {
        this.PanElementHeight('screen-background', 2);
      }
    });
  }

  PanElementWidth(className : string, increment: number) : void {
    //get the classname of the background image element
    var element = $('.'+className)[0];

    //parse out the width as an integer so it can be incremented.
    if(element.style["width"] == "") { 
      element.style["width"] = "101%"
    };

    //parse the width property into an int so we can increment it.
    var widthInt = parseInt(element.style["width"].substring(0, element.style["width"].length-1));
    
    var w = (widthInt + increment);

    if(w <= 100) {
      console.log(widthInt + increment);
    } else {
      widthInt += increment;
    }

    element.style["width"] = "" + widthInt + "%";
  }

  PanElementHeight(className : string, increment: number) : void {
    //get the classname of the background image element
    var element = $('.'+className)[0];

    //parse out the height as an integer so it can be incremented.
    if(element.style["height"] == "") { 
      element.style["height"] = "101%"
    };

    //parse the height property into an int so we can increment it.
    var heightInt = parseInt(element.style["height"].substring(0, element.style["height"].length-1));
    
    var w = (heightInt + increment);

    if(w <= 100) {
      console.log(heightInt + increment);
    } else {
      heightInt += increment;
    }

    element.style["height"] = "" + heightInt + "%";
  }

  initRenderer() : void {
    var renderer	= new THREE.WebGLRenderer({
      antialias	: true
    });
    renderer.setClearColor(new THREE.Color('lightgrey'), 1)
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // array of functions for the rendering loop
    var onRenderFcts= [];
    // init scene and camera
    var scene	= new THREE.Scene();
    var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 2;
    var controls	= new THREE.OrbitControls(camera)

    var geometry	= new THREE.TorusKnotGeometry(0.5-0.12, 0.12);
    var material	= new THREE.MeshNormalMaterial(); 
    var mesh	= new THREE.Mesh( geometry, material );
    scene.add( mesh );
    
    window.addEventListener('resize', function(){
      renderer.setSize( window.innerWidth, window.innerHeight )
      camera.aspect	= window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()		
    }, false)
    // render the scene
    onRenderFcts.push(function(){
      renderer.render( scene, camera );		
    })
    
    // run the rendering loop
    var lastTimeMsec= null
    requestAnimationFrame(function animate(nowMsec){
      // keep looping
      requestAnimationFrame( animate );
      // measure time
      lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
      var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
      lastTimeMsec	= nowMsec
      // call each update function
      onRenderFcts.forEach(function(onRenderFct){
        onRenderFct(deltaMsec/1000, nowMsec/1000)
      })
    })
  }
	
}


