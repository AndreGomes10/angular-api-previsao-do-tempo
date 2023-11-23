import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //private apikey = '6382bcc26479515eedc5eecb7474992f'
  private apikey = '50b1ac3e87a13d1c70f851dbed0b35a2'

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string) : Observable<any>{  // vai receber o nome da cidade
    return this.http.get(
      //`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`,
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&node=json&appid=${this.apikey}`,
      {}
    );
  }
}
