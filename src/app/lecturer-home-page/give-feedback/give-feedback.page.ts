import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, Platform  } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FeedbackHttpService } from '../../services/feedback-http.service';
import { Feedback } from '../../modal-classes/feedback.model';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})



export class GiveFeedbackPage implements OnInit {
  @ViewChild(IonTextarea, {static: false}) textarea: IonTextarea;
  
  constructor(private navCtrl: NavController, private http: HttpClient,
    private feedbackService: FeedbackHttpService, private speechRecogntion: SpeechRecognition, private plt: Platform) {  
  }
  speechContents: string[] = [''];
  isFormValid = false;
  descriptionArr: string[] = [];
  descriptionstr = '';
  feedback = {
    context: '',
    description: '',
    senderId: '',
    recipientId: '',
    isRead: false,
    isRequest: false,
    respondsTo: -1,
    date: '25-10-2019'
  };
  isStudentValid = false;
  isContextValid = false;
  isDescriptionValid = false;
  isRecording = false;


  checkCurrentForm() {
    let feedbackObj = this.feedback;
    this.isStudentValid = this.studentValidation(feedbackObj.recipientId);
    this.isContextValid = this.contextValidation(feedbackObj.context);
    this.isDescriptionValid = this.descriptionValidation(feedbackObj.description);
    if (this.isContextValid && this.isDescriptionValid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  studentValidation(student) {
    if (student.length >= 1 && student.length <= 8) {
      return true;
    } else {
      return false;
    }
  }

  contextValidation(context) {
    if (context.length >= 1 && context.length <= 12) {
      return true;
    } else {
      return false;
    }
  }

  descriptionValidation(description) {
    if (description.length >= 1 && description.length <= 300) {
      return true;
    } else {
      return false;
    }
  }

  submitFeedback() {
  }

  navigateToHomeScreen() {
    this.onCreateFeedback(JSON.stringify(this.feedback));
    this.navCtrl.navigateForward('/lecturer-home');
  }

  toggleRecording() {
    const options = {
      language: 'en-US',
      matches: 1,
      // showPopup: false // this variable sets the amount of suggested results that are returned default is 5
    };
    this.speechRecogntion.startListening(options).subscribe(matches => {
      this.zone.run(() => {
        this.descriptionstr += matches;
       // for (let i = 0; i < this.speechContents.length; i++) {
        // for (let i = 0; i < this.feedback.description.length; i++) {
          // this.speechContents[i] += matches[i] + '. ';
         // this.feedback.description[i] += matches[i];
       // }
      });
    });

    // this.isRecording = !this.isRecording;
  // this.isRecording = false;
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id);
    this.feedback.senderId = user.id;
    // check microphone permission on activation
    this.speechRecogntion.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecogntion.requestPermission();
        }
      });
  }
  
  attachFile() {
  }
    
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
