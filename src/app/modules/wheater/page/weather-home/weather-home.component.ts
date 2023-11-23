import { WeatherDatas } from './../../../../models/interfaces/Weather';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { response } from 'express';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent  implements OnInit, OnDestroy{

  private readonly destroy$: Subject<void> = new Subject()  // importado do rxjs
  initialCityName = 'São Paulo'
  weatherDatas!: WeatherDatas
  searchIcon = faMagnifyingGlass

  constructor(private wetherService: WeatherService) {  // importar a classe weather-service
  }
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName)
  }

  getWeatherDatas(cityName: string): void {  // vai receber o nome da cidade
    this.wetherService
    .getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({  // subscribe, ele vai ficar escutando o observable pra sempre
      next: (response) => {
        response && (this.weatherDatas = response)  // condição if, se response tem dados dentro, entao atribui o valor pra weatherDatas
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error)
    })
  }

  // pesquisar a cidade
  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName)
    //console.log("CHAMOU A FUNÇÃO")
    this.initialCityName = ''
  }

  // pro componente ser desmontasdo da tela
  ngOnDestroy(): void {
    // quando esse componente for fechado e sair da tela esse componente será desmontado
    this.destroy$.next()
    this.destroy$.complete()
  }

}
