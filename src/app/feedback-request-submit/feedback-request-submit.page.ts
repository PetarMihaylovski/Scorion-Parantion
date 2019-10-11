import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-request-submit',
  templateUrl: './feedback-request-submit.page.html',
  styleUrls: ['./feedback-request-submit.page.scss'],
})
export class FeedbackRequestSubmitPage implements OnInit {
  isLecturer = true;
  constructor() { }

  ngOnInit() {
  }

  alert() {
    window.alert(`i work`);
  }

  getPreviousForm() {
    if (this.isLecturer) {
      return '/give-feedback';
    } else {
      return '/request-feedback';
    }
  }
}
