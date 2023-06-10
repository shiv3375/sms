import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FacultyService } from './faculty.service';

describe('FacultyService', () => {
  let service: FacultyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FacultyService],
    });
    service = TestBed.inject(FacultyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all faculties', () => {
    //  let  apiUrl = 'http://localhost:8000/facultyList';
    const mockFaculties = [
      {
        id: 1,
        Name: 'Ananya Gupta',
        Designation: 'Assistant Professor',
        DOJ: '2021-03-15',
        Experience: '2 years 8 months',
        Subject: 'Data Structures',
        Department: 'Computer Science',
      },

      {
        id: 2,
        Name: 'Amit Patel',
        Designation: 'Associate Professor',
        DOJ: '2018-07-10',
        Experience: '6 years 10 months',
        Subject: 'Electrical Circuits',
        Department: 'Electrical Engineering',
      },

      {
        id: 3,
        Name: 'Rahul Sharma',
        Designation: 'Professor',
        DOJ: '2010-05-03',
        Experience: '13 years 2 months',
        Subject: 'Thermodynamics',
        Department: 'Mechanical Engineering',
      },

      {
        id: 4,
        Name: 'Priya Patel',
        Designation: 'Assistant Professor',
        DOJ: '2019-11-20',
        Experience: '3 years 6 months',
        Subject: 'Structural Engineering',
        Department: 'Civil Engineering',
      },

      {
        id: 5,
        Name: 'Sneha Verma',
        Designation: 'Associate Professor',
        DOJ: '2016-09-05',
        Experience: '7 years 9 months',
        Subject: 'Chemical Reactions',
        Department: 'Chemical Engineering',
      },

      {
        id: 6,
        Name: 'Rajesh Kumar',
        Designation: 'Professor',
        DOJ: '2008-02-12',
        Experience: '15 years 4 months',
        Subject: 'Quantum Physics',
        Department: 'Physics',
      },

      {
        id: 7,
        Name: 'Shalini Joshi',
        Designation: 'Assistant Professor',
        DOJ: '2022-01-18',
        Experience: '1 year 4 months',
        Subject: 'Calculus',
        Department: 'Mathematics',
      },

      {
        id: 8,
        Name: 'Manoj Singh',
        Designation: 'Associate Professor',
        DOJ: '2017-06-30',
        Experience: '8 years 11 months',
        Subject: 'Genetics',
        Department: 'Biology',
      },

      {
        id: 9,
        Name: 'Sanjay Sharma',
        Designation: 'Professor',
        DOJ: '2005-09-25',
        Experience: '17 years 8 months',
        Subject: 'English Literature',
        Department: 'English',
      },

      {
        id: 10,
        Name: 'Rajeev Kumar',
        Designation: 'Assistant Professor',
        DOJ: '2022-05-08',
        Experience: '1 month',
        Subject: 'Ancient History',
        Department: 'History',
      },

      {
        id: 11,
        Name: 'Pooja Gupta',
        Designation: 'Associate Professor',
        DOJ: '2015-11-12',
        Experience: '7 years 7 months',
        Subject: 'Cultural Geography',
        Department: 'Geography',
      },

      {
        id: 12,
        Name: 'Rajesh Sharma',
        Designation: 'Professor',
        DOJ: '2007-03-05',
        Experience: '16 years 3 months',
        Subject: 'Microeconomics',
        Department: 'Economics',
      },

      {
        id: 13,
        Name: 'Neha Patel',
        Designation: 'Assistant Professor',
        DOJ: '2021-06-02',
        Experience: '2 weeks',
        Subject: 'Managerial Accounting',
        Department: 'Business Administration',
      },

      {
        id: 14,
        Name: 'Karan Singh',
        Designation: 'Associate Professor',
        DOJ: '2018-03-12',
        Experience: '5 years 5 months',
        Subject: 'Cognitive Psychology',
        Department: 'Psychology',
      },

      {
        id: 15,
        Name: 'Nisha Verma',
        Designation: 'Professor',
        DOJ: '2009-09-25',
        Experience: '13 years 8 months',
        Subject: 'Social Psychology',
        Department: 'Sociology',
      },

      {
        id: 16,
        Name: 'Rohit Kumar',
        Designation: 'Assistant Professor',
        DOJ: '2022-03-18',
        Experience: '1 year 3 months',
        Subject: 'Digital Art',
        Department: 'Fine Arts',
      },

      {
        id: 17,
        Name: 'Vikas Singh',
        Designation: 'Associate Professor',
        DOJ: '2017-12-10',
        Experience: '5 years 6 months',
        Subject: 'Music Theory',
        Department: 'Music',
      },

      {
        id: 18,
        Name: 'Kiran Sharma',
        Designation: 'Professor',
        DOJ: '2006-08-15',
        Experience: '16 years 9 months',
        Subject: 'Sports Psychology',
        Department: 'Physical Education',
      },

      {
        id: 19,
        Name: 'Neha Singh',
        Designation: 'Assistant Professor',
        DOJ: '2022-06-05',
        Experience: '2 weeks',
        Subject: 'Nursing Informatics',
        Department: 'Nursing',
      },

      {
        id: 20,
        Name: 'Vikrant Patel',
        Designation: 'Associate Professor',
        DOJ: '2018-04-12',
        Experience: '5 years 3 months',
        Subject: 'Pharmaceutical Analysis',
        Department: 'Pharmacy',
      },

      {
        id: 21,
        Name: 'Nikita Mishra',
        Designation: 'Assistant Professor',
        DOJ: '2022-02-10',
        Experience: '1 year 4 months',
        Subject: 'Artificial Intelligence',
        Department: 'Computer Science',
      },

      {
        id: 22,
        Name: 'Vivek Singh',
        Designation: 'Associate Professor',
        DOJ: '2017-05-08',
        Experience: '6 years 1 month',
        Subject: 'Power Systems',
        Department: 'Electrical Engineering',
      },

      {
        id: 23,
        Name: 'Ritu Sharma',
        Designation: 'Professor',
        DOJ: '2010-08-03',
        Experience: '12 years 10 months',
        Subject: 'Fluid Mechanics',
        Department: 'Mechanical Engineering',
      },

      {
        id: 24,
        Name: 'Rahul Verma',
        Designation: 'Assistant Professor',
        DOJ: '2019-12-20',
        Experience: '2 years 5 months',
        Subject: 'Environmental Engineering',
        Department: 'Civil Engineering',
      },

      {
        id: 25,
        Name: 'Sunita Patel',
        Designation: 'Associate Professor',
        DOJ: '2016-07-05',
        Experience: '7 years 11 months',
        Subject: 'Chemical Process Control',
        Department: 'Chemical Engineering',
      },

      {
        id: 26,
        Name: 'Arun Kumar',
        Designation: 'Professor',
        DOJ: '2007-01-12',
        Experience: '16 years 5 months',
        Subject: 'Astrophysics',
        Department: 'Physics',
      },

      {
        id: 27,
        Name: 'Suman Joshi',
        Designation: 'Assistant Professor',
        DOJ: '2022-03-18',
        Experience: '1 year 3 months',
        Subject: 'Statistics',
        Department: 'Mathematics',
      },

      {
        id: 28,
        Name: 'Alok Sharma',
        Designation: 'Associate Professor',
        DOJ: '2017-06-30',
        Experience: '6 years 10 months',
        Subject: 'Cell Biology',
        Department: 'Biology',
      },

      {
        id: 29,
        Name: 'Vidya Gupta',
        Designation: 'Professor',
        DOJ: '2005-09-25',
        Experience: '17 years 8 months',
        Subject: 'English Language and Literature',
        Department: 'English',
      },

      {
        id: 30,
        Name: 'Rajiv Kapoor',
        Designation: 'Assistant Professor',
        DOJ: '2022-04-18',
        Experience: '1 year 1 month',
        Subject: 'Modern History',
        Department: 'History',
      },
    ];

    service.getAllFaculties().subscribe((faculties) => {
      expect(faculties).toEqual(mockFaculties);
    });

    const req = httpMock.expectOne('http://localhost:8000/facultyList');
    expect(req.request.method).toBe('GET');
    req.flush(mockFaculties);
  });

  it('should retrieve faculty by ID', () => {
    const facultyId = 1;
    const mockFaculty = {
      id: facultyId,
      Name: 'Asha Singh',
      Designation: 'Assistant Professor',
      DOJ: '2020-08-20',
      Experience: '4 years 5 months',
      Subject: 'Software Development Methodology',
      Department: 'Computer Science',
    };

    service.getFacultyById(facultyId).subscribe((faculty) => {
      expect(faculty).toEqual(mockFaculty);
    });

    const req = httpMock.expectOne(
      `http://localhost:8000/facultyList/${facultyId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockFaculty);
  });

  it('should add a new faculty', () => {
    const newFaculty = {
      Name: 'John Doe',
      Designation: 'Associate Professor',
      DOJ: '2022-01-01',
      Experience: '3 years',
      Subject: 'Database Management',
      Department: 'Computer Science',
    };

    const mockResponse = { id: 2, ...newFaculty };
    service.addFaculty(newFaculty).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8000/facultyList');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should update an existing faculty', () => {
    const facultyId = 1;
    const updatedFaculty = {
      id: 1,
      Name: 'Asha Singh',
      Designation: 'Associate Professor',
      DOJ: '2020-08-20',
      Experience: '6 years 2 months',
      Subject: 'Software Development Methodology',
      Department: 'Computer Science',
    };

    service.updateFaculty(facultyId, updatedFaculty).subscribe((response) => {
      expect(response).toEqual(updatedFaculty);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${facultyId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedFaculty);
  });

  it('should delete an existing faculty', () => {
    const facultyId = 1;
    const mockResponse = { message: 'Faculty deleted successfully' };

    service.deleteFaculty(facultyId).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `http://localhost:8000/facultyList/${facultyId}`
    );
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);
  });
});
