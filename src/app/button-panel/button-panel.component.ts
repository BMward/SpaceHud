import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonPanelComponent implements OnInit {

  extended: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  movePanel() : void {
    var panel = $('.bottom-right-panel')[0];
    if(!this.extended) {
      panel.style["animation"] = "slide-buttons-left .75s forwards"
    } else {
      panel.style["animation"] = "slide-buttons-right .75s forwards"
    }
    this.extended = !this.extended;
    
  }

}
