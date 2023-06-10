import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deptfilter',
})
export class DeptfilterPipe implements PipeTransform {
  transform(facultyList: any[], department: string): any[] {
    if (!facultyList || !department) {
      return facultyList;
    }

    return facultyList.filter((faculty) => faculty.Department === department);
  }
}
