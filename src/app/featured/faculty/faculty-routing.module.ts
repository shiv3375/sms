import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FacultyListComponent } from './components/faculty-list/faculty-list.component';


const routes :Routes=[
  {path:'',component:FacultyListComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})
export class FacultyRoutingModule { }
