import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LocationService } from './location.service';
import { Location } from '../models/location';
import { BehaviorSubject, of } from 'rxjs';

describe('LocationService', () => {
  let service: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService],
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve locations from API', () => {
    const mockLocations = [
      {
        id: 1,
        name: 'Ujjain',
      },
      {
        id: 2,
        name: 'Mumbai',
      },
      {
        id: 3,
        name: 'New York',
      },
      {
        id: 4,
        name: 'London',
      },
      {
        id: 5,
        name: 'Tokyo',
      },
      {
        id: 6,
        name: 'Sydney',
      },
      {
        id: 7,
        name: 'Paris',
      },
      {
        id: 8,
        name: 'Dubai',
      },
      {
        id: 9,
        name: 'Moscow',
      },
      {
        id: 10,
        name: 'Berlin',
      },
      {
        id: 11,
        name: 'Rome',
      },
      {
        id: 12,
        name: 'Madrid',
      },
      {
        id: 13,
        name: 'Cairo',
      },
      {
        id: 14,
        name: 'Rio de Janeiro',
      },
      {
        id: 15,
        name: 'Toronto',
      },
      {
        id: 16,
        name: 'Seoul',
      },
      {
        id: 17,
        name: 'Beijing',
      },
      {
        id: 18,
        name: 'Sydney',
      },
      {
        id: 19,
        name: 'Cape Town',
      },
      {
        id: 20,
        name: 'Delhi',
      },
    ];

    service.fetchLocations().subscribe((locations: Location[]) => {
      expect(locations.length).toBe(20);
      expect(locations).toEqual(mockLocations);
    });

    const req = httpMock.expectOne('http://localhost:8000/cityList');
    expect(req.request.method).toBe('GET');
    req.flush(mockLocations);
  });

  it('should return the selected location ID', () => {
    const locationId = 1;
    const selectedLocationIdSubject = new BehaviorSubject<number | null>(
      locationId
    );
    spyOn(service['selectedLocationIdSubject'], 'asObservable').and.returnValue(
      selectedLocationIdSubject.asObservable()
    );

    service.fetchLocationId().subscribe((id: number | null) => {
      expect(id).toBe(locationId);
    });

    expect(
      service['selectedLocationIdSubject'].asObservable
    ).toHaveBeenCalled();
  });

  it('should set the selected location ID', () => {
    const locationId = 2;

    service.setLocationId(locationId);
    spyOn(service['selectedLocationIdSubject'], 'asObservable').and.returnValue(
      of(2)
    );
    expect(service['selectedLocationIdSubject'].getValue()).toBe(locationId);
  });
});
