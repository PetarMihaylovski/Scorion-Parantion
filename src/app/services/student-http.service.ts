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

  setupStudentIdNameDictionary() {
    return this.http.get<{ [key: string]: Student }>(
      `https://projectpersistent-660c4.firebaseio.com/students.json`
    )
      .pipe(map(rsp => {
        const studentIdNameDictionary = new Map<string, string>();
        for (const key in rsp) {
          if (rsp.hasOwnProperty(key)) {
            studentIdNameDictionary.set(
              { ...rsp[key], id: key }.id, { ...rsp[key], id: key }.username
            );
          }
        }
        
        console.log(studentIdNameDictionary.get("2"))
        return studentIdNameDictionary;
      }));
  }

  getStudentNameById(id) {
    return this.http.get<{ [key: string]: Student }>(
      `https://projectpersistent-660c4.firebaseio.com/students.json`
    )
      .pipe(map(rsp => { 
        return { ...rsp[id], id: id }.username;
      }));
  }
}
