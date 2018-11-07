import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APODPayload } from '../Models/APODPayload';
import { ApodService } from '../Services/apod.service';
import { Channel, channels } from '../Models/Channel';


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
  stations : Channel[];
  selectedStation : Channel;
  
  testIds = [];
  constructor(private route : ActivatedRoute, private _client : HttpClient, private apod : ApodService) 
  {
    this.client = _client;
  }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.testIds.push(params.get('id'));
    })
    this.stations = channels;
    this.apod.setApodBackground();
  }
}
