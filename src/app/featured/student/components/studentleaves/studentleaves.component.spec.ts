import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentleavesComponent } from './studentleaves.component';
import { LeavesServiceService } from '../../services/leaves-service.service';
import { Leaves } from '../../models/leaves';
import { of } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

describe('StudentleavesComponent', () => {
  let component: StudentleavesComponent;
  let fixture: ComponentFixture<StudentleavesComponent>;
  let leavesService: jasmine.SpyObj<LeavesServiceService>;

  beforeEach(() => {
    const leavesServiceSpy = jasmine.createSpyObj('LeavesServiceService', [
      'fetchLeavesByStudentId',
    ]);
    TestBed.configureTestingModule({
      declarations: [StudentleavesComponent],
      providers: [
        {
          provide: LeavesServiceService,
          useValue: leavesServiceSpy,
        },
      ],
    });
    fixture = TestBed.createComponent(StudentleavesComponent);
    component = fixture.componentInstance;
    leavesService = TestBed.inject(
      LeavesServiceService
    ) as jasmine.SpyObj<LeavesServiceService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnchanges', () => {
    it('should fetch leaves by student id and set it as data source ', () => {
      const studentId = 3;
      const mockLeaves: Leaves[] = [
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
      leavesService.fetchLeavesByStudentId.and.returnValue(of(mockLeaves));
      component.studentId = studentId;
      component.ngOnChanges();
      expect(leavesService.fetchLeavesByStudentId).toHaveBeenCalledWith(
        studentId
      );
      expect(component.Leaves).toEqual(mockLeaves);
      expect(component.dataSource.data).toEqual(mockLeaves);
    });
  });
});
