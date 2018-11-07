import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApodService } from '../Services/apod.service';
import { Channel, channels } from '../Models/Channel';
import * as _ from 'lodash';
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
  stations : Channel[];
  selectedStation : Channel;
  audio : HTMLAudioElement = new Audio();

  constructor(private apod : ApodService) { }

  ngOnInit() {
    this.stations = channels;
    this.loadRandomStation();
  }

  moveButtonPanel() : void {
    var panel = $('.bottom-right-panel')[0];
    var expander = document.getElementById('expander-button');
    if(!this.extended) {
      panel.style["animation"] = "slide-buttons-left .75s forwards";
      expander.style["transform"] = "rotate(180deg)";
    } else {
      panel.style["animation"] = "slide-buttons-right .75s forwards";
      expander.style["transform"] = "rotate(0deg)";
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

  loadRandomStation() : void {
    var channel = this.stations[_.random(0,this.stations.length-1)];    
    console.log(channel);
    this.selectedStation = channel;
    this.loadStation(channel);
  }

  loadStation(station : Channel) : void {
    this.audio.src = station.uri;
    this.audio.load();
    this.audio.play();
  }

}
