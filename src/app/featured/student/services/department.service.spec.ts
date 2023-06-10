import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './department.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DepartmentService],
    });
    service = TestBed.inject(DepartmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch Department from API', () => {
    const mockDepartments = [
      {
        id: 1,
        dept_name: 'Computer Science',
        HOD: 'John Smith',
      },
      {
        id: 2,
        dept_name: 'Electrical Engineering',
        HOD: 'Sarah Johnson',
      },
      {
        id: 3,
        dept_name: 'Mechanical Engineering',
        HOD: 'David Wilson',
      },
      {
        id: 4,
        dept_name: 'Civil Engineering',
        HOD: 'Emily Davis',
      },
      {
        id: 5,
        dept_name: 'Chemical Engineering',
        HOD: 'Michael Brown',
      },
      {
        id: 6,
        dept_name: 'Physics',
        HOD: 'Emma Anderson',
      },
      {
        id: 7,
        dept_name: 'Mathematics',
        HOD: 'Daniel Lee',
      },
      {
        id: 8,
        dept_name: 'Biology',
        HOD: 'Olivia Wilson',
      },
      {
        id: 9,
        dept_name: 'English',
        HOD: 'Liam Johnson',
      },
      {
        id: 10,
        dept_name: 'History',
        HOD: 'Ava Davis',
      },
      {
        id: 11,
        dept_name: 'Geography',
        HOD: 'Noah Smith',
      },
      {
        id: 12,
        dept_name: 'Economics',
        HOD: 'Isabella Taylor',
      },
      {
        id: 13,
        dept_name: 'Business Administration',
        HOD: 'Mason Anderson',
      },
      {
        id: 14,
        dept_name: 'Psychology',
        HOD: 'Sophia Thomas',
      },
      {
        id: 15,
        dept_name: 'Sociology',
        HOD: 'Ethan Martinez',
      },
      {
        id: 16,
        dept_name: 'Fine Arts',
        HOD: 'Mia Davis',
      },
      {
        id: 17,
        dept_name: 'Music',
        HOD: 'Benjamin Robinson',
      },
      {
        id: 18,
        dept_name: 'Physical Education',
        HOD: 'Charlotte Harris',
      },
      {
        id: 19,
        dept_name: 'Nursing',
        HOD: 'James Wilson',
      },
      {
        id: 20,
        dept_name: 'Pharmacy',
        HOD: 'Amelia Thompson',
      },
    ];
    service.fetchDepartments().subscribe((dept) => {
      expect(dept).toEqual(mockDepartments);
    });
    const req = httpMock.expectOne('http://localhost:8000/departmentList');
    expect(req.request.method).toBe('GET');
    req.flush(mockDepartments);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
