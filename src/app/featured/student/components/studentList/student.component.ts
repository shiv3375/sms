import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Subscription } from 'rxjs';

import { LocationService } from 'src/app/core/services/location.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  cityId: number | null = null;
  public studentId!: number;
  studentDeptArcynum!: string;
  public subscription: Subscription = new Subscription();
  public searchText!: string;

  constructor(
    private studentService: StudentService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.subscription = this.locationService
      .fetchLocationId()
      .subscribe((data) => {
        this.cityId = data;

        this.fetchStudentByCityId();
      });
  }

  fetchStudentByCityId(): void {
    if (this.cityId !== null || this.cityId !== undefined) {
      this.studentService.fetchStudentByCityId(this.cityId).subscribe(
        (students) => {
          this.students = students;
        },
        (error) => {
          console.error('Error fetching students', error);
          alert('Error fetching students');
        }
      );
    }
  }

  handleShowStudent(id: number): void {
    this.studentId = id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
