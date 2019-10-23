import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.page.html',
  styleUrls: ['./request-feedback.page.scss'],
})
export class RequestFeedbackPage implements OnInit {
  constructor(private navCtrl: NavController) { }
  isFormValid = false;

  feedback = {
    lecturer: '',
    context: '',
    description: ''
  };
  isLecturerValid = false;
  isContextValid = false;
  isDescriptionValid = false;
  isRecording = false;

  checkCurrentForm() {
    let feedbackObj = this.feedback;
    this.isLecturerValid = this.lecturerValidation(feedbackObj.lecturer);
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
    this.isRecording = !this.isRecording;
  }

  ngOnInit() {}
  
  goToStudentHomePage() {
    this.navCtrl.navigateBack('/student-home');
  }
}
