import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StudentService } from './services/student.service';
import { Student } from '../student/models/student';
import { throwError } from 'rxjs';

describe('StudentService', () => {
  let service: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService],
    });
    service = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch a list of students', () => {
    const students: Student[] = [
      {
        name: 'Jane Smith',
        id: 2,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-02-28',
        DOJ: '2022-01-01',
        semester: 2,
        grade: 7.5,
        cityId: 3,
      },
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
        name: 'Emma Thompson',
        id: 4,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1997-11-03',
        DOJ: '2020-08-20',
        semester: 6,
        grade: 9,
        cityId: 2,
      },
    ];

    service.fetchStudents().subscribe((data) => {
      expect(data).toEqual(students);
    });

    const req = httpMock.expectOne('http://localhost:8000/stduentsList');
    expect(req.request.method).toBe('GET');
    req.flush(students);
  });

  it('should handle error when fetching students', () => {
    const error = 'Error fetching students';

    service.fetchStudents().subscribe(
      () => {},
      (err) => {
        expect(err).toEqual(error);
      }
    );

    const req = httpMock.expectOne('http://localhost:8000/stduentsList');
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 500, statusText: error });
  });

  it('should fetch a student by ID', () => {
    const student: Student = {
      name: 'Jane Smith',
      id: 2,
      dept: {
        id: 1,
        dept_name: 'Computer Science',
        HOD: 'John Smith',
      },
      DOB: '1998-02-28',
      DOJ: '2022-01-01',
      semester: 2,
      grade: 7.5,
      cityId: 3,
    };

    service.fetchStudentById(2).subscribe((data) => {
      expect(data).toEqual(student);
    });

    const req = httpMock.expectOne('http://localhost:8000/stduentsList/2');
    expect(req.request.method).toBe('GET');
    req.flush(student);
  });

  it('should handle error when fetching a student by ID', () => {
    const error = 'Error fetching students';

    service.fetchStudentById(1).subscribe(
      () => {},
      (err) => {
        expect(err).toEqual(error);
      }
    );

    const req = httpMock.expectOne('http://localhost:8000/stduentsList/1');
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 500, statusText: error });
  });

  it('should fetch students by city ID', () => {
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
      {
        name: 'Ava Wilson',
        id: 16,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1999-01-23',
        DOJ: '2020-11-05',
        semester: 5,
        grade: 8.5,
        cityId: 1,
      },
      {
        name: 'Henry Smith',
        id: 19,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-09-14',
        DOJ: '2020-12-01',
        semester: 6,
        grade: 7.8,
        cityId: 1,
      },
      {
        name: 'John Smith',
        id: 21,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1999-02-18',
        DOJ: '2021-06-05',
        semester: 2,
        grade: 7.5,
        cityId: 1,
      },
      {
        name: 'Emma Johnson',
        id: 22,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1998-11-09',
        DOJ: '2022-09-20',
        semester: 4,
        grade: 8.2,
        cityId: 1,
      },
      {
        name: 'Michael Brown',
        id: 23,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1997-07-04',
        DOJ: '2021-10-01',
        semester: 6,
        grade: 9,
        cityId: 1,
      },
      {
        name: 'David Wilson',
        id: 24,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1999-04-25',
        DOJ: '2022-01-05',
        semester: 3,
        grade: 7.8,
        cityId: 1,
      },
      {
        name: 'Olivia Davis',
        id: 25,
        dept: {
          id: 4,
          dept_name: 'Chemistry',
          HOD: 'Sarah Wilson',
        },
        DOB: '1998-10-18',
        DOJ: '2021-11-15',
        semester: 5,
        grade: 8.6,
        cityId: 1,
      },
      {
        name: 'Michael Johnson',
        id: 26,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1997-07-31',
        DOJ: '2022-03-10',
        semester: 2,
        grade: 7.3,
        cityId: 1,
      },
      {
        name: 'Sophia Anderson',
        id: 27,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1999-06-24',
        DOJ: '2021-09-01',
        semester: 4,
        grade: 8.9,
        cityId: 1,
      },
      {
        name: 'Daniel Thompson',
        id: 28,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-03-17',
        DOJ: '2020-09-05',
        semester: 6,
        grade: 8.1,
        cityId: 1,
      },
      {
        name: 'Emily Wilson',
        id: 29,
        dept: {
          id: 4,
          dept_name: 'Chemistry',
          HOD: 'Sarah Wilson',
        },
        DOB: '1997-12-10',
        DOJ: '2021-01-20',
        semester: 3,
        grade: 7.7,
        cityId: 1,
      },
      {
        name: 'William Johnson',
        id: 30,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1999-05-03',
        DOJ: '2022-04-01',
        semester: 5,
        grade: 8.3,
        cityId: 1,
      },
      {
        name: 'Isabella Smith',
        id: 31,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-02-26',
        DOJ: '2020-10-15',
        semester: 2,
        grade: 7.9,
        cityId: 1,
      },
      {
        name: 'James Davis',
        id: 32,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1997-05-03',
        DOJ: '2021-02-05',
        semester: 4,
        grade: 8.7,
        cityId: 1,
      },
      {
        name: 'Mia Anderson',
        id: 33,
        dept: {
          id: 4,
          dept_name: 'Chemistry',
          HOD: 'Sarah Wilson',
        },
        DOB: '1998-11-23',
        DOJ: '2020-10-20',
        semester: 6,
        grade: 9.2,
        cityId: 1,
      },
      {
        name: 'Alexander Thompson',
        id: 34,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1999-07-16',
        DOJ: '2021-03-10',
        semester: 3,
        grade: 8,
        cityId: 1,
      },
      {
        name: 'Ava Wilson',
        id: 35,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1998-04-03',
        DOJ: '2020-11-05',
        semester: 5,
        grade: 8.5,
        cityId: 1,
      },
      {
        name: 'Benjamin Johnson',
        id: 36,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1997-08-30',
        DOJ: '2022-04-01',
        semester: 2,
        grade: 7.6,
        cityId: 1,
      },
      {
        name: 'Charlotte Davis',
        id: 37,
        dept: {
          id: 4,
          dept_name: 'Chemistry',
          HOD: 'Sarah Wilson',
        },
        DOB: '1999-07-11',
        DOJ: '2021-03-20',
        semester: 4,
        grade: 8.4,
        cityId: 1,
      },
      {
        name: 'Henry Smith',
        id: 38,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-05-04',
        DOJ: '2020-12-01',
        semester: 6,
        grade: 7.8,
        cityId: 1,
      },
      {
        name: 'Scarlett Thompson',
        id: 39,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1997-12-27',
        DOJ: '2022-05-10',
        semester: 3,
        grade: 9.1,
        cityId: 1,
      },
      {
        name: 'John Smith',
        id: 40,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1999-08-18',
        DOJ: '2021-06-05',
        semester: 2,
        grade: 7.5,
        cityId: 1,
      },
      {
        name: 'Shiv',
        id: 50,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '2023-05-06T18:30:00.000Z',
        DOJ: '2023-05-28T18:30:00.000Z',
        semester: 2,
        grade: 8,
        cityId: 1,
      },
      {
        name: 'Shivansh',
        id: 52,
        dept: {
          id: 5,
          dept_name: 'Chemical Engineering',
          HOD: 'Michael Brown',
        },
        DOB: '2023-05-07T18:30:00.000Z',
        DOJ: '2023-05-22T18:30:00.000Z',
        semester: 1,
        grade: 9,
        cityId: 1,
      },
    ];

    service.fetchStudentByCityId(1).subscribe((data) => {
      expect(data).toEqual(students);
    });

    const req = httpMock.expectOne(
      'http://localhost:8000/stduentsList?cityId=1'
    );
    expect(req.request.method).toBe('GET');
    req.flush(students);
  });

  it('should handle error when fetching students by city ID', () => {
    const error = 'Error fetching students';

    service.fetchStudentByCityId(1).subscribe(
      () => {},
      (err) => {
        expect(err).toEqual(error);
      }
    );

    const req = httpMock.expectOne(
      'http://localhost:8000/stduentsList?cityId=1'
    );
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 500, statusText: error });
  });

  it('should create a student', () => {
    const student: Student = {
      name: 'Jane Smith',
      id: 2,
      dept: {
        id: 1,
        dept_name: 'Computer Science',
        HOD: 'John Smith',
      },
      DOB: '1998-02-28',
      DOJ: '2022-01-01',
      semester: 2,
      grade: 7.5,
      cityId: 3,
    };

    service.createStudent(student).subscribe((data) => {
      expect(data).toEqual(student);
    });

    const req = httpMock.expectOne('http://localhost:8000/stduentsList');
    expect(req.request.method).toBe('POST');
    req.flush(student);
  });

  it('should update a student', () => {
    const studentId = 2;
    const newStudent: Student = {
      name: 'Jane Smith',
      id: 2,
      dept: {
        id: 1,
        dept_name: 'Computer Science',
        HOD: 'John Smith',
      },
      DOB: '1998-02-28',
      DOJ: '2022-01-01',
      semester: 2,
      grade: 7.5,
      cityId: 3,
    };

    service.updateStudent(studentId, newStudent).subscribe((data) => {
      expect(data).toEqual(newStudent);
    });

    const req = httpMock.expectOne('http://localhost:8000/stduentsList/2');
    expect(req.request.method).toBe('PUT');
    req.flush(newStudent);
  });

  it('should delete a student', () => {
    const studentId = 2;

    service.deleteStudent(studentId).subscribe();

    const req = httpMock.expectOne('http://localhost:8000/stduentsList/2');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
