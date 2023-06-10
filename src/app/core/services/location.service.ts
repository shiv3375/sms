import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'http://localhost:8000/cityList';
  private selectedLocationIdSubject: BehaviorSubject<number | null> =
    new BehaviorSubject<number | null>(1);

  constructor(private http: HttpClient) {}
  fetchLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl);
  }

  fetchLocationId(): Observable<number | null> {
    return this.selectedLocationIdSubject.asObservable();
  }

  setLocationId(locationId: number | null): void {
    this.selectedLocationIdSubject.next(locationId);
    // console.log(' this is the updated ' + locationId);
    this.selectedLocationIdSubject.subscribe((data) => {});
  }
}
