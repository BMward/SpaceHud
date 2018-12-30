import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RadioService } from '../Services/radio.service';

@Component({
  selector: 'app-radio-panel',
  templateUrl: './radio-panel.component.html',
  styleUrls: ['./radio-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadioPanelComponent implements OnInit {
  radioPlaying : boolean = true;
  radioStatus : string = "pause"

  constructor(private radio : RadioService) { }

  ngOnInit() {
  }

  toggleRadio() : void {
    console.log(this.radioPlaying);
    if(this.radioPlaying) {
      this.radio.audio.pause();
      this.radioStatus = "tune";
    } else {
      this.radio.audio.play();
      this.radioStatus = "pause";
    }
    this.radioPlaying = !this.radioPlaying;
  }

}
