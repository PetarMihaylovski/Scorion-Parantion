import { Component, OnInit } from '@angular/core';
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

  isStudentRequestingFeedback: any;
  isStudentReadingFeedback: any;
  isLecturerReadingFeedback: any;

  constructor(private modalCtrl: ModalController) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  writeFeedback() {
    this.isWritingFeedback = true;
  }

  checkRequest() {
    this.isWritingFeedback = false;
  }

  checkDescription() {
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
    await this.modalCtrl.dismiss({context: this.writtenContext, description: this.writtenDescription});
  }

  checkFeedback() {
    this.isEditingFeedback = false;
  }

  editFeedback() {
    this.isEditingFeedback = true;
  }

  async editForm() {
    await this.modalCtrl.dismiss({changed_context: this.editedContext, changed_description: this.editedDescription});
  }

  ngOnInit() {}
}
