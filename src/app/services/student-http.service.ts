import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Student } from '../modal-classes/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<{ [key: string]: Student }>(
      `https://projectpersistent-660c4.firebaseio.com/students.json`
    )
      .pipe(map(rsp => {
        const students: Student[] = [];
        for (const key in rsp) {
          if (rsp.hasOwnProperty(key)) {
            students.push({ ...rsp[key], id: key });
          }
        }
        return students;
      }));
  }

  getStudentNameById(id) {
    return "Student " + id;
  }
}
