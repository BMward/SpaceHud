/// <reference path="../../node_modules/@types/three/index.d.ts" />
/// <reference path="../../node_modules/@types/three/three-orbitcontrols.d.ts" />
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  testIds = [];
  extended = false;
  name : any;
  routeData: any;
  
  ngOnInit(): void {
    
  }
  constructor(private route : ActivatedRoute, private router : Router) {
    

    window.setTimeout(() => {
      this.initKeyFunctions();    
    }, 1300);
  }

  // sets up the event listenders for key presses that pan the screen.
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

  log(message: string) : void {
    console.log(message);
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

}


