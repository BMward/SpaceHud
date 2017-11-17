import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YoutubeVideoComponent implements OnInit {

  extended = false;
  @Input() id;
  videoId = [];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
   this.videoId = this.id;
   console.log(this.videoId);
  }

  movePanel() : void {
    var panel = $('.bottom-left-panel')[0];
    if(!this.extended) {
      panel.style["animation"] = "slide-right-arm .75s forwards, neon2 2.5s ease-in-out infinite alternate"
      console.log('panel extended');
    } else {
      panel.style["animation"] = "slide-left-arm .75s forwards, neon2 2.5s ease-in-out infinite alternate"
      console.log('panel extended');
    }
    this.extended = !this.extended;
    
  }

}
