import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
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
  youtubeBaseUrl : string = "https://www.youtube.com/embed/";
  sanitizedYouTubeUrl : any;
  @Input() id;
  videoId = [];

  constructor(private route : ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.id === null || this.id === undefined || this.id.length < 11) {
      this.videoId.push('YDbDKG4X5xc');
    }
    else {
      this.videoId.push(this.id);
    }
    this.youtubeBaseUrl += this.videoId[0];
    this.sanitizedYouTubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeBaseUrl);
    console.log(this.sanitizedYouTubeUrl);
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
