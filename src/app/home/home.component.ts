import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APODPayload } from '../Models/APODPayload';
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
  
  testIds = [];
  constructor(private route : ActivatedRoute, private _client : HttpClient, private apod : ApodService) 
  {
    this.client = _client;
  }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.testIds.push(params.get('id'));
    })

    // var d = new Date();
    // console.log(d.toISOString().slice(0, 10));

    this.apod.setApodBackground();
    this.SpaceStationSoma();
  }

  SpaceStationSoma() : void {
    var tune = new Audio();
    tune.src = "http://ice1.somafm.com/spacestation-128-mp3";
    tune.load();
    tune.play();
  }
}
