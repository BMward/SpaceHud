import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RadioService } from '../Services/radio.service';

@Component({
  selector: 'app-radio-panel',
  templateUrl: './radio-panel.component.html',
  styleUrls: ['./radio-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadioPanelComponent implements OnInit {
  radioStatus : string = "="

  constructor(private radio : RadioService) { }

  ngOnInit() {
    this.radio.loadRandomStation();
  }

  toggleRadio() : void {
    if(this.radio.playing) {
      this.radio.audio.pause();
      this.radioStatus = ">";
    } else {
      this.radio.audio.play();
      this.radioStatus = "=";
    }
    this.radio.playing = !this.radio.playing;
  }

}
