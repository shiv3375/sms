import { Component, Input, OnChanges } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnChanges {
  columnsToDisplay: string[] = [
    'name',
    'id',
    'department',
    'dob',
    'doj',
    'semester',
    'grade',
  ];
  public selectedStudent!: Student;
  @Input() public id!: number;
  constructor(
    public studentService: StudentService,
    public dialog: MatDialog
  ) {}

  ngOnChanges(): void {
    this.studentService
      .fetchStudentById(this.id)
      .subscribe((data) => (this.selectedStudent = data));
  }
  handleOpenDialogAdd(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '90%';
    dialogConfig.data = {
      action: 'add',
      id: 0,
    };
    const dialogRef = this.dialog.open(AddStudentComponent, dialogConfig);
  }

  handleOpenDialogEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '90%';
    dialogConfig.data = {
      action: 'edit',
      id: this.id,
    };
    const dialogRef = this.dialog.open(AddStudentComponent, dialogConfig);
  }
}
