import { NgModule } from '@angular/core';

import { StudentComponent } from './components/studentList/student.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[{ path: '', component: StudentComponent }]
@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  
})
export class StudentRoutingModule { }
