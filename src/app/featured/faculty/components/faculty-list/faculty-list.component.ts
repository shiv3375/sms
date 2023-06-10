import { Component, OnInit } from '@angular/core';
import { Faculty } from '../../model/faculty';
import { HttpClientModule } from '@angular/common/http';
import { FacultyService } from '../../services/faculty.service';
import { DepartmentService } from 'src/app/featured/student/services/department.service';
import { Department } from 'src/app/featured/student/models/department';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css'],
})
export class FacultyListComponent implements OnInit {
  public faculty!: Faculty[];
  public departments!: Department[];
  public showTable: boolean = true;
  public groupedByDept: boolean = false;
  public expandedDepartments: Department[] = [];
  constructor(
    private http: HttpClientModule,
    private facultyService: FacultyService,
    private deptService: DepartmentService
  ) {}
  ngOnInit(): void {
    this.fetchAllFaculty();
    this.fetchAllDept();
  }

  fetchAllFaculty() {
    this.facultyService.getAllFaculties().subscribe((faculty) => {
      this.faculty = faculty;
    });
  }
  fetchAllDept() {
    this.deptService.fetchDepartments().subscribe((dept) => {
      this.departments = dept;
    });
  }
  toggleGrouping() {
    if (this.groupedByDept === true) {
      this.groupedByDept = false;
    } else {
      this.groupedByDept = true;
    }
  }
  isDepartmentExpanded(department: Department): boolean {
    return this.expandedDepartments.includes(department);
  }
  toggleDepartment(department: Department) {
    const index = this.expandedDepartments.indexOf(department);
    if (index !== -1) {
      this.expandedDepartments.splice(index, 1);
    } else {
      this.expandedDepartments.push(department);
    }
  }
}
