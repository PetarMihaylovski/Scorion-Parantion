import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Feedback } from '../modal-classes/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackHttpService {

  constructor(private http: HttpClient) { }

  getFeedbacks() {
    return this.http.get<{ [key: string]: Feedback }>(
      `https://projectpersistent-660c4.firebaseio.com/feedbacks.json`
      )
      .pipe(map(rsp => {
        const feedbacks: Feedback[] = [];
        for (const key in rsp) {
          if (rsp.hasOwnProperty(key)) {
            feedbacks.push({ ...rsp[key], id: key });
          }
        }
        return feedbacks;
      }));
  }

  getLastFeedbackId() {
    return this.http.get<{ [key: string]: Feedback }>(
      `https://projectpersistent-660c4.firebaseio.com/lastFeedbackId.json`
      )
  }
}
