import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyListComponent } from './components/faculty-list/faculty-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FacultyListComponent],
  imports: [CommonModule, FacultyRoutingModule, SharedModule],
})
export class FacultyModule {}
