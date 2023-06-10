export interface Student {
  id: number;
  name: string;

  dept: {
    id: number;
    dept_name: string;
    HOD: string;
  };
  DOB: string;
  DOJ: string;
  semester: number;
  grade: number;
  cityId: number;
}
