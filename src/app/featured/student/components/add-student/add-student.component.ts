import { Component, Inject, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../models/department';
import { Location } from '../../models/location';
import { LocationService } from '../../../../core/services/location.service';
import { DepartmentService } from '../../services/department.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  public semesters: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  public departments: Department[] = [];
  public locations: Location[] = [];
  public newStudentForm!: FormGroup;
  public exitingStudent!: Student;
  public city_id!: number;
  public dept_id!: number;
  public title!: string;
  constructor(
    public dialogRef: MatDialogRef<AddStudentComponent>,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private locationService: LocationService,
    private departmentService: DepartmentService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.generateForm();
    if (this.data.action === 'add') {
      this.title = 'Add Student';
    }
    if (this.data.action === 'edit') {
      this.title = 'Edit Student';
      this.fetchExistingDetails();
    }

    this.fetchDepartments();
    this.fetchLocations();
  }
  //to handle submission
  onSubmit() {
    // debugger;
    if (this.data.action === 'add') {
      this.addStudent();
    }
    if (this.data.action === 'edit') {
      this.editStudent();
    }
    this.closeDialog();
  }
  editStudent() {
    if (this.newStudentForm.valid) {
      // Create a new student object with form values

      // debugger;

      const newStudent: Student = {
        name: this.newStudentForm.get('name')?.value,
        id: this.exitingStudent.id,
        dept: {
          id: this.exitingStudent.dept.id,
          dept_name: this.newStudentForm.get('dept_name')?.value,
          HOD: this.newStudentForm.get('HOD')?.value,
        },
        DOB: this.newStudentForm.get('DOB')?.value,
        DOJ: this.newStudentForm.get('DOJ')?.value,
        semester: this.newStudentForm.get('semester')?.value,
        grade: this.newStudentForm.get('grade')?.value,
        cityId: this.exitingStudent.cityId,
      };

      // Make the Put request

      this.studentService
        .updateStudent(this.exitingStudent.id, newStudent)
        .subscribe();
    }
    this.closeDialog();
  }

  addStudent() {
    if (this.newStudentForm.valid) {
      // Create a new student object with form values
      const newStudent: Student = {
        name: this.newStudentForm.get('name')?.value,
        id: 0,
        dept: {
          id: this.dept_id,
          dept_name: this.newStudentForm.get('dept_name')?.value,
          HOD: this.newStudentForm.get('HOD')?.value,
        },
        DOB: this.newStudentForm.get('DOB')?.value,
        DOJ: this.newStudentForm.get('DOJ')?.value,
        semester: this.newStudentForm.get('semester')?.value,
        grade: this.newStudentForm.get('grade')?.value,
        cityId: this.city_id,
      };

      this.studentService.createStudent(newStudent).subscribe();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  generateForm() {
    this.newStudentForm = this.formBuilder.group({
      name: ['', Validators.required],
      DOB: ['', Validators.required],
      DOJ: ['', Validators.required],
      semester: ['', Validators.required],
      grade: ['', Validators.required],
      dept_name: ['', Validators.required],
      HOD: [
        { value: 'Head of Department', disabled: true },
        Validators.required,
      ],
      location: ['', Validators.required],
    });
  }
  fetchExistingDetails() {
    // this.newStudentForm.
    this.studentService.fetchStudentById(this.data.id).subscribe((student) => {
      this.exitingStudent = student;
      this.newStudentForm.get('name')?.setValue(this.exitingStudent.name);
      this.newStudentForm
        .get('dept_name')
        ?.setValue(this.exitingStudent.dept.dept_name);
      this.newStudentForm.get('HOD')?.setValue(this.exitingStudent.dept.HOD);
      this.newStudentForm.get('DOB')?.setValue(this.exitingStudent.DOB);
      this.newStudentForm.get('DOJ')?.setValue(this.exitingStudent.DOJ);
      this.newStudentForm
        .get('semester')
        ?.setValue(this.exitingStudent.semester);
      this.newStudentForm.get('grade')?.setValue(this.exitingStudent.grade);
    });
  }
  fetchDepartments(): void {
    this.departmentService.fetchDepartments().subscribe((dept) => {
      this.departments = dept;
    });
  }

  onDepartmentSelected(): void {
    let selectedDepartment = this.newStudentForm.get('dept_name')?.value;
    let selectedDepartmentObj = this.departments.find(
      (dept) => dept.dept_name === selectedDepartment
    );
    if (selectedDepartmentObj) {
      this.newStudentForm.get('HOD')?.setValue(selectedDepartmentObj.HOD);
      this.dept_id = selectedDepartmentObj.id;
    }
  }

  fetchLocations(): void {
    this.locationService.fetchLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  onLocationSelected(): void {
    let selectedLocation = this.newStudentForm.get('location')?.value;
    let selectedLocationObj = this.locations.find(
      (loc) => loc.name === selectedLocation
    );
    if (selectedLocationObj) {
      this.city_id = selectedLocationObj.id;
    }
  }

  dateComparisonValidator(formGroup: {
    get: (arg0: string) => {
      (): any;
      new (): any;
      value: any;
      setErrors: {
        (arg0: { dateComparison: boolean } | null): void;
        new (): any;
      };
    };
  }) {
    const dob = formGroup.get('DOB').value;
    const doj = formGroup.get('DOJ').value;

    if (dob && doj && dob > doj) {
      formGroup.get('DOJ').setErrors({ dateComparison: true }); // Set error on DOJ control
    } else {
      formGroup.get('DOJ').setErrors(null); // Clear error if DOJ is valid
    }
  }
}
