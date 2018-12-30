import { Injectable } from '@angular/core';
import { Channel, channels } from '../Models/Channel';
import * as _ from 'lodash';

@Injectable()
export class RadioService {
  stations : Channel[];
  selectedStation : Channel;
  playing : boolean;

  audio : HTMLAudioElement;

  constructor() 
  {
    this.stations = channels;
    this.audio = new Audio();
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
    this.playing = false;
  }


}
