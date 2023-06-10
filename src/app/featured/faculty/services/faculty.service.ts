import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  private apiUrl = 'http://localhost:8000/facultyList';

  constructor(private http: HttpClient) {}

  getAllFaculties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFacultyById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addFaculty(faculty: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, faculty);
  }

  updateFaculty(id: number, faculty: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, faculty);
  }

  deleteFaculty(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
