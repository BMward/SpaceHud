import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

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
  constructor(private route : ActivatedRoute, private _client : HttpClient) 
  {
    this.client = _client;
  }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.testIds.push(params.get('id'));
    })
    
    this.setApodBackground();
  }
  
  setApodBackground() : void {
    let background = $('.screen-background')[0]; 
    $(background).css('background-image', 'url(' + '../../assets/backgrounds/mw.jpg' + ')');
  };

}
