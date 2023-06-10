import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('./featured/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('./featured/faculty/faculty.module').then((m) => m.FacultyModule),
  },
  {
    path: 'department',
    loadChildren: () =>
      import('./featured/department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
