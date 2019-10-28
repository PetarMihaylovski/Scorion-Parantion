import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})

export class GiveFeedbackPage implements OnInit {
  constructor(private navCtrl: NavController,
    private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) { }
  isFormValid = false;

  feedback = {
    student: '',
    context: '',
    description: ''
  };
  isStudentValid = false;
  isContextValid = false;
  isDescriptionValid = false;
  isRecording = false;
   matches: string[];

  checkCurrentForm() {
    let feedbackObj = this.feedback;
    this.isStudentValid = this.studentValidation(feedbackObj.student);
    this.isContextValid = this.contextValidation(feedbackObj.context);
    this.isDescriptionValid = this.descriptionValidation(feedbackObj.description);
    if (this.isStudentValid && this.isContextValid && this.isDescriptionValid) {
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
    this.isRecording = !this.isRecording;
  }

  ngOnInit() { }

  goToLecturerHomePage() {
    this.navCtrl.navigateBack('/lecturer-home');
  }

  isIos() {
    return this.plt.is('ios');
  }

  getPermission() {
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });
  }

  startListening() {
    const options = {
      language: 'en-US',
      matches: 10
    };
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();

    });
    this.isRecording = true;
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }
}
