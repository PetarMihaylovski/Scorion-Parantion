import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FeedbackHttpService } from '../services/feedback-http.service';
import { Feedback } from '../modal-classes/feedback.model';

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
    date: '25-10-2019'
  };

  constructor(private modalCtrl: ModalController, private http: HttpClient,
    private feedbackService: FeedbackHttpService) { }

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
      return true;
    } else {
      this.isDescriptionValid = false;
      return false;
    }
  }

  checkEditedDescription() {
    if (this.editedDescription.length > 0) {
      this.isEditedDescriptionValid = true;
      return true;
    } else {
      this.isEditedDescriptionValid = false;
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
  }
}
