import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/studentList/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { StudentleavesComponent } from './components/studentleaves/studentleaves.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentComponent,
    StudentDetailsComponent,
    StudentleavesComponent,
    AddStudentComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule,
    MaterialModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
})
export class StudentModule {}
