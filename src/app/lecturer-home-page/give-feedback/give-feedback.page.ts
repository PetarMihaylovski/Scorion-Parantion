import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, Platform, IonTextarea } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';


@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})



export class GiveFeedbackPage implements OnInit {
  @ViewChild(IonTextarea, {static: false}) textarea: IonTextarea;
  speechContents: string[] = [''];

  constructor(private navCtrl: NavController,
              private speechRecogntion: SpeechRecognition, private plt: Platform, private zone: NgZone) { }
  isFormValid = false;
  descriptionArr: string[] = [];
  feedback = {
    student: '',
    context: '',
    description: ''
  };
  isStudentValid = false;
  isContextValid = false;
  isDescriptionValid = false;
  isRecording = false;


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

  checkSavedText() {
    alert(this.descriptionArr.toString);
  }

  toggleRecording() {
    const options = {
      language: 'en-US',
      matches: 1,
      // showPopup: false // this variable sets the amount of suggested results that are returned default is 5
    };
    this.speechRecogntion.startListening(options).subscribe(matches => {
      this.zone.run(() => {
        for (let i = 0; i < this.speechContents.length; i++) {
          this.speechContents[i] += matches[i] + '. ';
        }
      });
    });

    // this.isRecording = !this.isRecording;
  // this.isRecording = false;
  }

  ngOnInit() {
    // check microphone permission on activation
    this.speechRecogntion.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecogntion.requestPermission();
        }
      });
  }

  goToLecturerHomePage() {
    this.navCtrl.navigateBack('/lecturer-home');
  }

  isIos() {
    return this.plt.is('ios');
  }

  stopListening() {
    this.speechRecogntion.stopListening().then(() => {
      this.isRecording = false;
    });
  }
}

// ionic cordova build android
