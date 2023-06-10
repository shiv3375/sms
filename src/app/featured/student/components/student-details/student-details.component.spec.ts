import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentDetailsComponent } from './student-details.component';
import { StudentService } from '../../services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Student } from '../../models/student';
import { AddStudentComponent } from '../add-student/add-student.component';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;
  let studentService: jasmine.SpyObj<StudentService>;
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const studentServiceSpy = jasmine.createSpyObj('StudentService', [
      'fetchStudentById',
    ]);
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [StudentDetailsComponent],
      providers: [
        { provide: StudentService, useValue: studentServiceSpy },
        { provide: MatDialog, useValue: matDialogSpy },
      ],
    });

    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    studentService = TestBed.inject(
      StudentService
    ) as jasmine.SpyObj<StudentService>;
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should fetch student by id and assign to selectedStudent', () => {
      const studentId = 1;
      const mockStudent: Student = {
        id: studentId,
        name: 'John Doe',
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '19-05-1995',
        DOJ: '05-05-2021',
        semester: 5,
        grade: 8,
        cityId: 1,
      };
      studentService.fetchStudentById.and.returnValue(of(mockStudent));

      component.id = studentId;
      component.ngOnChanges();

      expect(studentService.fetchStudentById).toHaveBeenCalledWith(studentId);
      expect(component.selectedStudent).toEqual(mockStudent);
    });
  });

  describe('handleOpenDialogAdd', () => {
    it('should open the add student dialog with correct configuration', () => {
      component.handleOpenDialogAdd();

      expect(matDialog.open).toHaveBeenCalled();
      expect(matDialog.open).toHaveBeenCalledWith(
        AddStudentComponent,
        jasmine.objectContaining({
          disableClose: true,
          autoFocus: true,
          width: '80%',
          height: '90%',
          data: {
            action: 'add',
            id: 0,
          },
        })
      );
    });
  });

  describe('handleOpenDialogEdit', () => {
    it('should open the edit student dialog with correct configuration', () => {
      const studentId = 1;
      component.id = studentId;

      component.handleOpenDialogEdit();

      expect(matDialog.open).toHaveBeenCalled();
      expect(matDialog.open).toHaveBeenCalledWith(
        AddStudentComponent,
        jasmine.objectContaining({
          disableClose: true,
          autoFocus: true,
          width: '80%',
          height: '90%',
          data: {
            action: 'edit',
            id: studentId,
          },
        })
      );
    });
  });
});
