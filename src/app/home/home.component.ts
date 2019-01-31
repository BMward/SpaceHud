import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApodService } from '../Services/apod.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  apodUrl : string;
  videoId : string;
  constructor(private route : ActivatedRoute, private apod : ApodService) 
  { }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id');
      console.log(this.videoId);
    })
    this.apod.setApodBackground();
  }
}
