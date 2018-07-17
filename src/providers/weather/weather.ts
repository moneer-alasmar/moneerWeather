import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '8b77c6939fe88418a4dc3a801cc1cc0b';
  url;
  url2;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.url2 = 'http://api.aladhan.com/v1/timingsByCity?city=';
    // http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United%20Arab%20Emirates&method=8
  }
  getWeather(city, country){
    return this.http.get(this.url+city+','+country+'&units=imperial&appid='+this.apiKey)
  }
  getPrayers(city, country){
    return this.http.get(this.url2+city+'&country='+country+'&method=8')
  }

}
