import { Injectable } from '@angular/core';
import { APODPayload } from '../Models/APODPayload'
import { HttpClient } from '@angular/common/http';
import { KEYS } from '../KEYS';
import * as moment from 'moment';

declare var jquery:any;
declare var $ :any;

@Injectable()
export class ApodService {

  date : moment.Moment;;
  keys : KEYS = new KEYS();

  constructor(private http : HttpClient) 
  {
    this.date = moment();
    console.log(this.date.format('YYYY-MM-DD'));
    //toISOString().slice(0, 10)
  }

  apodDayBefore() : void {
    this.date = this.date.subtract(1, 'days');
    this.setApodBackground(this.date);
  }

  setApodBackground(d? : moment.Moment) : void {
    let background = $('.screen-background')[0];
    let url;
    let queryString = `https://api.nasa.gov/planetary/apod?api_key=${this.keys.apodKey}`;
    if(d) {
      queryString += '&date=' + this.date.format('YYYY-MM-DD') ;
    }
    this.http.get(queryString).subscribe((d : APODPayload) => {
      url = d.hdurl;
      if(d.media_type == "video") return;
      console.log(d.hdurl);
      $(background).css('background-image', 'url(' + url + ')');
    });
  };

}
