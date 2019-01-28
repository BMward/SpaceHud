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
      this.videoId.push('ztFovwCaOik');
    }
    else {
      this.videoId.push(this.id);
    }
    this.youtubeBaseUrl += this.videoId[0];
    this.sanitizedYouTubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeBaseUrl);
  }

  movePanel() : void {
    var panel = $('.bottom-left-panel')[0];
    if(!this.extended) {
      panel.style["animation"] = "slide-right-arm .75s forwards"
      console.log('panel extended');
    } else {
      panel.style["animation"] = "slide-left-arm .75s forwards"
      console.log('panel extended');
    }
    this.extended = !this.extended;
    
  }

}
