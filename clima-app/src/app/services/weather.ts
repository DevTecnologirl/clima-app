import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  private apiKey = '86e45332d5de6086d389443384155d8c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}
  getWeatherCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`);
  }
}
