import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
  imports: [CommonModule, FormsModule] // ← IMPORTANTE
})
export class Search {

  city: string = '';
  weatherData: any = null; // ← ADICIONADO

  constructor(private weatherService: Weather) {}

  searchWeather() {
    if (!this.city) return;

    this.weatherService.getWeatherCity(this.city).subscribe({
      next: data => this.weatherData = data,
      error: () => alert('Cidade não encontrada!')
    });
  }
}
