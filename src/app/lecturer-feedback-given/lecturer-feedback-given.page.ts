import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer-feedback-given',
  templateUrl: './lecturer-feedback-given.page.html',
  styleUrls: ['./lecturer-feedback-given.page.scss'],
})
export class LecturerFeedbackGivenPage implements OnInit {
  feedbacksGiven: any;
  isOldFeedbackToggled = false;
  isLatestFeedbackToggled = false;

  constructor() { 
    this.feedbacksGiven = [
      'Feedback 1',
      'Feedback 2',
      'Feedback 3',
      'Feedback 4',
      'Feedback 5',
      'Feedback 6',
      'Feedback 7'
    ];
  }


  toggleLatestFeedback() {
    this.isLatestFeedbackToggled = !this.isLatestFeedbackToggled;
  }

  toggleOldFeedback() {
    this.isOldFeedbackToggled = !this.isOldFeedbackToggled;
  }

  ngOnInit() {
  }



}
