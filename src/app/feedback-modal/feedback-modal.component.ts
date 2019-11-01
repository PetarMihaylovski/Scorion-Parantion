import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FeedbackHttpService } from '../services/feedback-http.service';
import { Feedback } from '../modal-classes/feedback.model';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import * as firebase from 'firebase';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent implements OnInit {
  /*@Input() */data: any;
  writtenContext = '';
  writtenDescription = '';
  editedContext = '';
  editedDescription = '';
  isWritingFeedback: any;
  isEditingFeedback: any;
  isRequest: any;
  isDescriptionValid: any;
  isEditedDescriptionValid: any;
  //---
  isStudentRequestingFeedback: any;
  lecturerName: any;
  lecturerCourse: any;
  requestedContext = '';
  requestedDescription = '';
  isRequestedContextValid: any;
  isRequestedDescriptionValid: any;

  isStudentReadingFeedback: any;

  isLecturerWritingResponseFeedback: any;
  isLecturerRespondingToFeedbackRequest: any;

  isLecturerReadingGivenFeedback: any;
  isLecturerEditingGivenFeedback: any;

  isLecturerWritingFeedback: any;
  requestingStudentId: any;

  feedbackResponse = {
    context: '',
    description: '',
    senderId: '',
    recipientId: '',
    isRead: false,
    isRequest: false,
    respondsTo: 0,
    date: '01-11-2019'
  };
  isFormValid = false;
  isRecording = false;
  speechContents: string[] = [''];
  descriptionArr: string[] = [];

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private http: HttpClient,
    private feedbackService: FeedbackHttpService, private speechRecognition: SpeechRecognition, private plt: Platform, private zone: NgZone,
    private file: File, private fileChooser: FileChooser,
    private filePath: FilePath) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  writeFeedback() {
    this.isLecturerWritingResponseFeedback = true;
  }

  checkRequest() {
    this.isLecturerWritingResponseFeedback = false;
  }

  checkDescription() {
    this.feedbackResponse.description = this.writtenDescription
    if (this.writtenDescription.length > 0) {
      this.isDescriptionValid = true;
      this.isFormValid = true;
      return true;
    } else {
      this.isDescriptionValid = false;
      this.isFormValid = false;
      return false;
    }
  }

  checkEditedDescription() {
    if (this.editedDescription.length > 0) {
      this.isEditedDescriptionValid = true;
      this.isFormValid = true;
      return true;
    } else {
      this.isEditedDescriptionValid = false;
      this.isFormValid = false;
      return false;
    }
  }

  async sendForm() {
    this.onCreateFeedback(JSON.stringify(this.feedbackResponse));
    await this.modalCtrl.dismiss({context: this.writtenContext, description: this.writtenDescription});
  }

  checkFeedback() {
    this.isLecturerEditingGivenFeedback = false;
  }

  editFeedback() {
    this.isLecturerEditingGivenFeedback = true;
  }

  async editForm() {
    await this.modalCtrl.dismiss({changed_context: this.editedContext, changed_description: this.editedDescription});
  }

  async requestFeedback() {
    await this.modalCtrl.dismiss({requested_context: this.requestedContext, requested_description: this.requestedDescription});
  }

  checkRequestValidity() {
    return this.checkRequestedContext() && this.checkRequestedDescription();
  }

  checkRequestedDescription() {
    if (this.requestedDescription.length > 0) {
      this.isRequestedDescriptionValid = true;
      return true;
    } else {
      this.isRequestedDescriptionValid = false;
      return false;
    }
  }

  checkRequestedContext() {
    if (this.requestedContext.length > 0) {  
      this.isRequestedContextValid = true;
      return true;
    } else {
      this.isRequestedContextValid = false;
      return false;
    }
  }

  // DELETE REQUEST AFTER THE RESPONSE IS SENT
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

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id);
    this.feedbackResponse.senderId = user.id;
    this.feedbackResponse.recipientId = this.requestingStudentId;
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
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

  toggleRecording() {
    const options = {
      language: 'en-US',
      matches: 1,
      // showPopup: false // this variable sets the amount of suggested results that are returned default is 5
    };
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.zone.run(() => {
        if (this.feedbackResponse.context === '') {
          this.feedbackResponse.context += matches;
        } else {
          this.feedbackResponse.description += matches + '. ';
        }
      });
    });
  }
}
