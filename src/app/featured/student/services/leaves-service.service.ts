import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leaves } from '../models/leaves';

@Injectable({
  providedIn: 'root',
})
export class LeavesServiceService {
  private apiUrl = 'http://localhost:8000/leavesList';

  constructor(public http: HttpClient) {}

  fetchLeavesByStudentId(id: number) {
    const url = `${this.apiUrl}?studentId=${id}`;

    return this.http.get<Leaves[]>(url);
  }
}
