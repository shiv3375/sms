import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcromymPipe } from './pipe/acromym.pipe';
import { StudentSearchPipePipe } from './pipe/student-search-pipe.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { DeptfilterPipe } from './pipe/deptfilter.pipe';

@NgModule({
  declarations: [
    AcromymPipe,
    StudentSearchPipePipe,
    SearchPipe,
    DeptfilterPipe,
  ],
  exports: [AcromymPipe, SearchPipe, DeptfilterPipe],
  imports: [CommonModule],
})
export class SharedModule {}
