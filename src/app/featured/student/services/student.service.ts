import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Student } from '../models/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:8000/stduentsList';

  constructor(private http: HttpClient) {}
  private cityIdSubject = new BehaviorSubject<number>(1);
  cityId$ = this.cityIdSubject.asObservable();

  public selectedStudentid!: number;
  public selectedStudent!: Student;

  setCityId(cityId: number): void {
    this.cityIdSubject.next(cityId);
  }

  fetchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl).pipe(
      catchError((error: any): Observable<Student[]> => {
        console.error('Error fetching students', error);
        return throwError('Error fetching students') as Observable<Student[]>;
      })
    );
  }

  fetchStudentById(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Student>(url).pipe(
      catchError((error: any): Observable<Student> => {
        console.error('Error fetching students', error);
        return throwError('Error fetching students') as Observable<Student>;
      })
    );
  }
  // Observable<number | null>
  fetchStudentByCityId(id: number | null): Observable<Student[]> {
    const url = `${this.apiUrl}?cityId=${id}`;
    return this.http.get<Student[]>(url).pipe(
      catchError((error: any): Observable<Student[]> => {
        console.error('Error fetching students', error);
        return throwError('Error fetching students') as Observable<Student[]>;
      })
    );
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(studentid: number, newStudent: Student): Observable<Student> {
    const url = `${this.apiUrl}/${studentid}`;

    return this.http.put<Student>(url, newStudent);
  }

  deleteStudent(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete<void>(url)
      .pipe(catchError(this.handleError<void>('deleteStudent')));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
