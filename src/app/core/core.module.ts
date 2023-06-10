import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LocationComponent } from '../main-view/components/location/location.component';
import { StudentComponent } from '../featured/student/components/studentList/student.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    FormsModule,
    StudentComponent,
    MaterialModule

  ]
})
export class CoreModule { }
