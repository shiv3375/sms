import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../../../core/services/location.service';
import { Location } from '../../../core/models/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  cities: Location[] = [];
  selectedCityId!: number;
  selectedCityName!: string | undefined;

  constructor(
    private locationService: LocationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.locationService.fetchLocations().subscribe(
      (data: Location[]) => {
        this.cities = data;
      },
      (error) => {
        console.error('Error fetching locations', error);
        alert('Error fetching locations');
      }
    );
  }

  updateLocationId(event: any): void {
    this.selectedCityId = event.target.value;
    console.log(event + ' the loc event  ');

    this.locationService.setLocationId(this.selectedCityId);
  }
}
