import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStudentComponent } from './add-student.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { LocationService } from '../../../../core/services/location.service';
import { DepartmentService } from '../../services/department.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;
  let dialogRefSpyObj = jasmine.createSpyObj({ close: null });
  const dialogData = { action: 'add' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentComponent],
      imports: [HttpClientTestingModule],
      providers: [
        FormBuilder,
        StudentService,
        LocationService,
        DepartmentService,
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: dialogData },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on ngOnInit', () => {
    component.ngOnInit();
    expect(component.newStudentForm).toBeDefined();
  });

  it('should initialize the form with empty values', () => {
    const formValues = component.newStudentForm.value;
    expect(formValues.name).toEqual('');
    expect(formValues.DOB).toEqual('');
    expect(formValues.DOJ).toEqual('');
    expect(formValues.semester).toEqual('');
    expect(formValues.grade).toEqual('');
    expect(formValues.dept_name).toEqual('');
    expect(formValues.HOD).toEqual(undefined);
    expect(formValues.location).toEqual('');
  });

  it('should call addStudent method when action is "add"', () => {
    spyOn(component, 'addStudent');
    component.data.action = 'add';
    component.onSubmit();
    expect(component.addStudent).toHaveBeenCalled();
  });

  it('should call editStudent method when action is "edit"', () => {
    spyOn(component, 'editStudent');
    component.data.action = 'edit';
    component.onSubmit();
    expect(component.editStudent).toHaveBeenCalled();
  });

  it('should call closeDialog method when onSubmit is called', () => {
    spyOn(component, 'closeDialog');
    component.onSubmit();
    expect(component.closeDialog).toHaveBeenCalled();
  });

  it('should call createStudent method of StudentService when addStudent is called', () => {
    const studentService = TestBed.inject(StudentService);
    spyOn(studentService, 'createStudent').and.returnValue(of()); // Use of() to create an empty observable
    component.newStudentForm.setValue({
      name: 'John Doe',
      dept_name: 'Computer Science',
      HOD: 'Jane Smith',
      DOB: '1990-01-01',
      DOJ: '2021-01-01',
      semester: 1,
      grade: 'A',
      location: 'City',
    });
    component.addStudent();
    expect(studentService.createStudent).toHaveBeenCalled();
  });

  it('should call close method of MatDialogRef when closeDialog is called', () => {
    component.closeDialog();
    expect(dialogRefSpyObj.close).toHaveBeenCalled();
  });
});
