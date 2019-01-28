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
  client : HttpClient;
  fetchedHtml : any;
  apodUrl : string;
  videoId : string;
  testIds = [];
  constructor(private route : ActivatedRoute, private _client : HttpClient, private apod : ApodService) 
  {
    this.client = _client;
  }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id');
      console.log(this.videoId);
      // this.testIds.push(params.get('id'));

    })
    this.apod.setApodBackground();
  }
}
