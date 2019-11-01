import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FeedbackHttpService } from '../../services/feedback-http.service';
import { Feedback } from '../../modal-classes/feedback.model';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import * as firebase from 'firebase';
import { FilePath } from '@ionic-native/file-path/ngx';


@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.page.html',
  styleUrls: ['./request-feedback.page.scss'],
})
export class RequestFeedbackPage implements OnInit {
  constructor(private navCtrl: NavController, private http: HttpClient,
    private feedbackService: FeedbackHttpService, private speechRecognition: SpeechRecognition, private plt: Platform, private zone: NgZone,
    private file: File, private fileChooser: FileChooser,
    private filePath: FilePath) { }
  isFormValid = false;
  speechContents: string[] = [''];
  descriptionArr: string[] = [];

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
    const feedbackObj = this.feedback;
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
    if (lecturer.length >= 1 && lecturer.length <= 8) {
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
    this.navCtrl.navigateForward('/student-home');
  }

  toggleRecording() {
    const options = {
      language: 'en-US',
      matches: 1,
    };
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.zone.run(() => {
        if (this.feedback.recipientId === '') {
          this.feedback.recipientId += matches;
        } else if (this.feedback.context === '') {
          this.feedback.context += matches;
        } else {
          this.feedback.description += matches + '. ';
        }
      });
    });
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id);
    this.feedback.senderId = user.id;
    // check microphone permission on activation
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  goToStudentHomePage() {
    this.navCtrl.navigateBack('/student-home');
  }

  // put this in the service
  onCreateFeedback(feedbackData) {// : { id: string; context: string; description: string; isRead: boolean; isRequest: boolean, recipientId: string; respondsTo: string; senderId: string; date: string; }) {
    // send http request
    this.http.post(
      'https://projectpersistent-660c4.firebaseio.com/feedbacks.json',
      feedbackData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  attachFile() {
    this.fileChooser.open().then((uri) => {
      if (localStorage.getItem('notifications') == "true") {
        alert("Uploading: " + uri);
      }

      this.filePath.resolveNativePath(uri).then(filePath => {
        //alert(filePath);
        let dirPathSegments = filePath.split('/');
        let fileName = dirPathSegments[dirPathSegments.length-1];
        dirPathSegments.pop();
        let dirPath = dirPathSegments.join('/');
        this.file.readAsArrayBuffer(dirPath, fileName).then(async (buffer) => {
          await this.upload(buffer, fileName);
        }).catch((err) => {
          //alert(err.toString());
        });
      });
    });
  }

  async upload(buffer, name) {
    let blob = new Blob([buffer], {type: "image/jpeg"})
    
    let storage = firebase.storage();

    storage.ref('images/' + name).put(blob).then((d) => {
      if (localStorage.getItem('notifications') == "true") {
        alert("File uploaded!");
      }
    }).catch((error)=>{
      alert(JSON.stringify(error))
    })
  }
}
