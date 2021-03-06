import { Injectable } from '@angular/core';
import { APODPayload } from '../Models/APODPayload'
import { HttpClient } from '@angular/common/http';
import { KEYS } from '../KEYS';
import * as moment from 'moment';
import { Observable } from 'rxjs';

declare var jquery:any;
declare var $ :any;

@Injectable()
export class ApodService {

  date : moment.Moment;
  keys : KEYS = new KEYS();
  explanation : string;

  constructor(private http : HttpClient) 
  {
    this.date = moment();
    console.log(this.date.format('YYYY-MM-DD'));
  }

  apodDayBefore() : void {
    this.date = this.date.subtract(1, 'days');
    this.setApodBackground(this.date);
  }

  setApodBackground(d? : moment.Moment) : void {
    this.getApodBackground(d).subscribe((d : APODPayload) => {
      var url = d.hdurl;
      this.explanation = d.explanation;
      if(d.media_type == "video") {
        console.log('hit video');
      } 
      console.log(d.hdurl);
      $($('.screen-background')[0]).css('background-image', 'url(' + url + ')');
    });
  };

  getApodBackground(d? : moment.Moment) : Observable<APODPayload> {
    let queryString = `https://api.nasa.gov/planetary/apod?api_key=${this.keys.apodKey}`;
    if(d) {
      queryString += '&date=' + this.date.format('YYYY-MM-DD') ;
    }
    return this.http.get<APODPayload>(queryString);

  }

}
