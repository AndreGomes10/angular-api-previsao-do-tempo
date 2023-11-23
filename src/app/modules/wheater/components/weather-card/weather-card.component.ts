import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../../models/interfaces/Weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas  // !, porqu provavelmente ele pode ser nulo, estamos inicializando ele como subscribe ou nulo, tipo é da interface WeatherDatas

  // Dados da previsão do tempo recebidos pelo componente pai
  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}
