import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentSearchPipe',
})
export class StudentSearchPipePipe implements PipeTransform {
  transform(students: any[], searchText: string): any[] {
    if (!students) {
      return [];
    }
    if (!searchText) {
      return students;
    }
    searchText = searchText.toLowerCase();
    return students.filter((student) => {
      return (
        student.name.toLowerCase().includes(searchText) ||
        student.dept.dept_name.toLowerCase().includes(searchText)
      );
    });
  }
}
