import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FeedbackHttpService } from '../../services/feedback-http.service';
import { Feedback } from '../../modal-classes/feedback.model';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})
export class GiveFeedbackPage implements OnInit {
  constructor(private navCtrl: NavController, private http: HttpClient,
    private feedbackService: FeedbackHttpService) {  
  }
  isFormValid = false;

  feedback = {
    context: '',
    description: '',
    id: '',
    senderId: '',
    recipientId: '',
    isRead: false,
    isResponse: false,
    respondsTo: false
  };
  lastFeedbackId: any;
  isStudentValid = false;
  isContextValid = false;
  isDescriptionValid = false;
  isRecording = false;

  checkCurrentForm() {
    let feedbackObj = this.feedback;
    this.isContextValid = this.contextValidation(feedbackObj.context);
    this.isDescriptionValid = this.descriptionValidation(feedbackObj.description);
    if (this.isContextValid && this.isDescriptionValid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  studentValidation(student) {
    if (student.length >= 7 && student.length <= 8) {
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
    this.navCtrl.navigateForward('/lecturer-home');
  }

  toggleRecording() {
    this.feedback.id = this.getLastFeedbackId();
    this.onCreateFeedback(JSON.stringify(this.feedback));
    this.isRecording = !this.isRecording;
  }

  // TODO: replace unique name ids with the randomly generated ids and put the auto-incre-
  // mented ids as a field
  // TODO: gradually replace the logic for getting all the feedbacks according to this while making sure the database doesn't break for the rest of the team
  getLastFeedbackId() {
    this.feedbackService.getLastFeedbackId().subscribe(lastFeedbackId => {
      this.lastFeedbackId = lastFeedbackId;

      // increase lastFeedbackId
      console.log("last feedback ID " + lastFeedbackId)
      console.log("feedbacks taken from the DB");
    });
    return this.lastFeedbackId
  }

  ngOnInit() {}
  
  goToLecturerHomePage() {
    this.navCtrl.navigateBack('/lecturer-home');
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
