import { TestBed } from '@angular/core/testing';

import { LeavesServiceService } from './leaves-service.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { Student } from '../models/student';

describe('LeavesServiceService', () => {
  let service: LeavesServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeavesServiceService],
    });
    service = TestBed.inject(LeavesServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchLeaves By StudentId', () => {
    const mockStudent = [
      {
        id: 4,
        studentId: 3,
        startdate: '2023-09-10',
        enddate: '2023-09-12',
        reason: 'Car accident',
        type: 'Medical',
      },
      {
        id: 21,
        studentId: 3,
        startdate: '2023-07-05',
        enddate: '2023-07-07',
        reason: 'Vacation',
        type: 'Personal',
      },
      {
        id: 22,
        studentId: 3,
        startdate: '2023-08-15',
        enddate: '2023-08-17',
        reason: 'Personal reasons',
        type: 'Personal',
      },
      {
        id: 23,
        studentId: 3,
        startdate: '2023-09-25',
        enddate: '2023-09-27',
        reason: 'Medical appointment',
        type: 'Medical',
      },
      {
        id: 24,
        studentId: 3,
        startdate: '2023-11-10',
        enddate: '2023-11-15',
        reason: 'Attending a workshop',
        type: 'Academic',
      },
      {
        id: 25,
        studentId: 3,
        startdate: '2023-12-20',
        enddate: '2023-12-25',
        reason: 'Holiday break',
        type: 'Personal',
      },
      {
        id: 26,
        studentId: 3,
        startdate: '2023-10-05',
        enddate: '2023-10-07',
        reason: 'Illness',
        type: 'Medical',
      },
      {
        id: 27,
        studentId: 3,
        startdate: '2023-11-15',
        enddate: '2023-11-17',
        reason: 'Personal reasons',
        type: 'Personal',
      },
      {
        id: 28,
        studentId: 3,
        startdate: '2023-12-25',
        enddate: '2023-12-28',
        reason: 'Vacation',
        type: 'Personal',
      },
      {
        id: 29,
        studentId: 3,
        startdate: '2023-09-05',
        enddate: '2023-09-07',
        reason: 'Family event',
        type: 'Personal',
      },
      {
        id: 30,
        studentId: 3,
        startdate: '2023-11-20',
        enddate: '2023-11-25',
        reason: 'Medical appointment',
        type: 'Medical',
      },
    ];
    service.fetchLeavesByStudentId(3).subscribe((student) => {
      expect(student.length).toBe(11);
      expect(student).toEqual(mockStudent);
    });
    const req = httpMock.expectOne(
      'http://localhost:8000/leavesList?studentId=3'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockStudent);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
