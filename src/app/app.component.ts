/// <reference path="../../node_modules/@types/three/index.d.ts" />
/// <reference path="../../node_modules/@types/three/three-orbitcontrols.d.ts" />
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  youtubeVideoUrl: string;
  title = 'app';
  extended = false;

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    this.youtubeVideoUrl = 'https://www.youtube.com/embed/';
    this.route.params.subscribe(params => {
      console.log(params);
      if(!params['id']) {
        this.youtubeVideoUrl += 'YDbDKG4X5xc'
      } else {
        this.youtubeVideoUrl += params['id'];
      }
    });
    window.setTimeout(() => {
      this.initKeyFunctions();    
    }, 1300);
  }
  

  constructor(private route : ActivatedRoute) {
    
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

  movePanel() : void {
    var panel = $('.bottom-left-panel')[0];
    if(!this.extended) {
      panel.style["animation"] = "slide-right-arm .75s forwards, neon2 2.5s ease-in-out infinite alternate"
      this.log('panel extended');
    } else {
      panel.style["animation"] = "slide-left-arm .75s forwards, neon2 2.5s ease-in-out infinite alternate"
      this.log('panel extended');
    }
    this.extended = !this.extended;
    
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


