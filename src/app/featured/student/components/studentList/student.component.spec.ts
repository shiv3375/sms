import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { StudentComponent } from './student.component';
import { StudentService } from '../../services/student.service';
import { LocationService } from 'src/app/core/services/location.service';
import { Student } from '../../models/student';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SearchPipe } from 'src/app/shared/pipe/search.pipe';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let studentService: StudentService;
  let locationService: LocationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ScrollingModule],
      declarations: [StudentComponent, SearchPipe],
      providers: [StudentService, LocationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    studentService = TestBed.inject(StudentService);
    locationService = TestBed.inject(LocationService);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should fetch students by city id on initialization', () => {
    const cityId = 1;
    const students: Student[] = [
      {
        name: 'John Doe',
        id: 3,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1999-05-15',
        DOJ: '2021-09-10',
        semester: 6,
        grade: 8.2,
        cityId: 1,
      },
      {
        name: 'Michael Johns',
        id: 7,
        dept: {
          id: 3,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-12-01',
        DOJ: '2022-02-10',
        semester: 2,
        grade: 7.3,
        cityId: 1,
      },
      {
        name: 'Emily Wilson',
        id: 10,
        dept: {
          id: 4,
          dept_name: 'Chemistry',
          HOD: 'Sarah Wilson',
        },
        DOB: '1999-03-17',
        DOJ: '2021-01-20',
        semester: 3,
        grade: 7.7,
        cityId: 1,
      },
      {
        name: 'James Davis',
        id: 13,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1998-05-21',
        DOJ: '2021-02-05',
        semester: 4,
        grade: 8.7,
        cityId: 1,
      },
    ];

    spyOn(locationService, 'fetchLocationId').and.returnValue(of(cityId));
    spyOn(studentService, 'fetchStudentByCityId').and.returnValue(of(students));

    component.ngOnInit();

    expect(locationService.fetchLocationId).toHaveBeenCalled();
    expect(studentService.fetchStudentByCityId).toHaveBeenCalledWith(cityId);
    expect(component.students).toEqual(students);
  });

  it('should handle error when fetching students', () => {
    const cityId = 1;
    const error = 'Error fetching students';

    spyOn(locationService, 'fetchLocationId').and.returnValue(of(cityId));
    spyOn(studentService, 'fetchStudentByCityId').and.returnValue(
      throwError(error)
    );
    spyOn(console, 'error');
    spyOn(window, 'alert');

    component.ngOnInit();

    expect(locationService.fetchLocationId).toHaveBeenCalled();
    expect(studentService.fetchStudentByCityId).toHaveBeenCalledWith(cityId);
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching students',
      error
    );
    expect(window.alert).toHaveBeenCalledWith('Error fetching students');
  });

  it('should set the student ID when handling show student event', () => {
    const studentId = 1;

    component.handleShowStudent(studentId);

    expect(component.studentId).toEqual(studentId);
  });

  it('should handle null cityId when fetching students', () => {
    spyOn(locationService, 'fetchLocationId').and.returnValue(of(null));
    spyOn(studentService, 'fetchStudentByCityId').and.returnValue(of([]));

    component.fetchStudentByCityId();

    expect(studentService.fetchStudentByCityId).toHaveBeenCalled();
    expect(component.students).toEqual([]);
  });

  it('should unsubscribe from the subscription on component destruction', () => {
    spyOn(component.subscription, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });
});
