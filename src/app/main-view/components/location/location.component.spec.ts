import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LocationService } from '../../../core/services/location.service';
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let locationService: LocationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LocationComponent],
      providers: [LocationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    locationService = TestBed.inject(LocationService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch locations on initialization', () => {
    const locations = [
      { id: 1, name: 'City 1' },
      { id: 2, name: 'City 2' },
    ];
    spyOn(locationService, 'fetchLocations').and.returnValue(of(locations));

    component.ngOnInit();

    expect(locationService.fetchLocations).toHaveBeenCalled();
    expect(component.cities).toEqual(locations);
  });

  it('should update the selectedCityId and call setLocationId when updateLocationId is called', () => {
    const selectedCityId = 1;
    const event = { target: { value: selectedCityId } };
    spyOn(locationService, 'setLocationId');

    component.updateLocationId(event);

    expect(component.selectedCityId).toBe(selectedCityId);
    expect(locationService.setLocationId).toHaveBeenCalledWith(selectedCityId);
  });
});
