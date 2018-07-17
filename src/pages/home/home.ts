import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  prayers: any;
  location: {
    city: string,
    state: string
  }
  iconUrl: string;

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
    
  }
  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
            this.location = {
                city: "Irvine",
                state: "CA"
              }
      }

    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {
      console.log(weather);
      this.weather = weather;
      this.iconUrl = 'http://openweathermap.org/img/w/'+this.weather.weather["0"].icon+'.png';
      console.log(this.iconUrl);
    })
    this.weatherProvider.getPrayers(this.location.city, this.location.state).subscribe(data => {
      console.log(data);
      this.prayers = data;
    })
  });
  }
}
