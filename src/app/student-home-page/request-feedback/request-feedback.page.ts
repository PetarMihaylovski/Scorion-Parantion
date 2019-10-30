import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FeedbackHttpService } from '../../services/feedback-http.service';
import { Feedback } from '../../modal-classes/feedback.model';

@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.page.html',
  styleUrls: ['./request-feedback.page.scss'],
})
export class RequestFeedbackPage implements OnInit {
  constructor(private navCtrl: NavController, private http: HttpClient,
    private feedbackService: FeedbackHttpService) { }
  isFormValid = false;

  feedback = {
    context: '',
    description: '',
    senderId: '',
    recipientId: '',
    isRead: false,
    isRequest: true,
    respondsTo: -1,
    date: '25-10-2019'
  };
  isLecturerValid = false;
  isContextValid = false;
  isDescriptionValid = false;
  isRecording = false;

  checkCurrentForm() {
    let feedbackObj = this.feedback;
    this.isLecturerValid = this.lecturerValidation(feedbackObj.recipientId);
    this.isContextValid = this.contextValidation(feedbackObj.context);
    this.isDescriptionValid = this.descriptionValidation(feedbackObj.description);
    if (this.isLecturerValid && this.isContextValid && this.isDescriptionValid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  lecturerValidation(lecturer) {
    if (lecturer.length >= 7 && lecturer.length <= 8) {
      return true;
    } else {
      return false;
    }
  }

  contextValidation(context) {
    if (context.length >= 7 && context.length <= 12) {
      return true;
    } else {
      return false;
    }
  }

  descriptionValidation(description) {
    if (description.length >= 7 && description.length <= 12) {
      return true;
    } else {
      return false;
    }
  }

  submitFeedback() {
  }

  navigateToHomeScreen() {
    this.navCtrl.navigateForward('/student-home');
  }

  toggleRecording() {
    this.onCreateFeedback(JSON.stringify(this.feedback));
    this.isRecording = !this.isRecording;
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id);
    this.feedback.senderId = user.id;
  }
  
  goToStudentHomePage() {
    this.navCtrl.navigateBack('/student-home');
  }

  // put this in the service
  onCreateFeedback(feedbackData){//: { id: string; context: string; description: string; isRead: boolean; isRequest: boolean, recipientId: string; respondsTo: string; senderId: string; date: string; }) {
    // send http request
    this.http.post(
      'https://projectpersistent-660c4.firebaseio.com/feedbacks.json',
      feedbackData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
