import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';

const routes:Routes=[{path: '',component:DepartmentListComponent }]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DepartmentRoutingModule { }
