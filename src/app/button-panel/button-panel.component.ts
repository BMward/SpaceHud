import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApodService } from '../Services/apod.service';
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
  buttonCaret : string = '<';

  constructor(private apod : ApodService) { }

  ngOnInit() {
  }

  moveButtonPanel() : void {
    var panel = $('.bottom-right-panel')[0];
    if(!this.extended) {
      panel.style["animation"] = "slide-buttons-left .75s forwards";
    } else {
      panel.style["animation"] = "slide-buttons-right .75s forwards";
    }
    this.extended = !this.extended;
    
  }

  warp() : void {
    var msg = this.apod.apodDayBefore();
    if(msg == false) {
      console.log('msg false');
      var el = $('.video-button')[0];
      $(el).css("background", 'rgba(255, 100, 85, .8) !important');
    }
  }

}
