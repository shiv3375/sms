import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8000/cityList';

  fetchLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl);
  }
}
