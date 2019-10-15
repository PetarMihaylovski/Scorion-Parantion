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
}
