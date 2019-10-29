import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Lecturer } from '../modal-classes/lecturer.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerHttpService {

  constructor(private http: HttpClient) { }

  getLecturers() {
    return this.http.get<{ [key: string]: Lecturer }>(
      `https://projectpersistent-660c4.firebaseio.com/lecturers.json`
      )
      .pipe(map(rsp => {
        const lecturers: Lecturer[] = [];
        for (const key in rsp) {
          if (rsp.hasOwnProperty(key)) {
            lecturers.push({ ...rsp[key], id: key });
          }
        }
        return lecturers;
      }));
  }

  setupLecturerIdNameDictionary() {
    return this.http.get<{ [key: string]: Lecturer }>(
      `https://projectpersistent-660c4.firebaseio.com/lecturers.json`
    )
      .pipe(map(rsp => {
        const lecturerIdNameDictionary = new Map<string, string>();
        for (const key in rsp) {
          if (rsp.hasOwnProperty(key)) {
            lecturerIdNameDictionary.set(
              { ...rsp[key], id: key }.id, { ...rsp[key], id: key }.username
            );
            console.log("created map entry for id: " + { ...rsp[key], id: key }.id);
            console.log("username: " + { ...rsp[key], id: key }.username);
            console.log(lecturerIdNameDictionary.get({ ...rsp[key], id: key }.id))
          }
        }
        return lecturerIdNameDictionary;
      }));
  }
}
