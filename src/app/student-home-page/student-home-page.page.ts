import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FeedbackHttpService } from '../services/feedback-http.service';
import { Feedback } from '../modal-classes/feedback.model';

import { LecturerHttpService } from '../services/lecturer-http.service';
import { Lecturer } from '../modal-classes/lecturer.model';

import { StudentHttpService } from '../services/student-http.service';
import { Student } from '../modal-classes/student.model';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.page.html',
  styleUrls: ['./student-home-page.page.scss'],
})
export class StudentHomePagePage implements OnInit {
  areFeedbacksToggled = true;
  feedbacks: Feedback[] = [];
  students: Student[] = [];
  lecturers: Lecturer[] = [];
  lecturerIdNameDictionary = new Map<string, string>();
  
  constructor(public popoverController: PopoverController, 
    private modalCtrl: ModalController, private router: Router, private navCtrl: NavController,
    private feedbackService: FeedbackHttpService,
    private lecturerService: LecturerHttpService,
    private studentService: StudentHttpService) { 
  }
  
  toggleFeedbackScreen() {
    this.areFeedbacksToggled = !this.areFeedbacksToggled;
  }

  async settingsPopover(event) {
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      event: event
    });
    return await popover.present();
  }
  
  async showFeedbackModal(feedback) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isStudentReadingFeedback: true,
        data: feedback
      }
    });
    await modal.present();
    /*modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))*/
  }

  ngOnInit() {
    this.lecturerService.setupLecturerIdNameDictionary().subscribe(lecturerIdNameDictionary => {
      lecturerIdNameDictionary.forEach((value: string, key: string) => {
        if (key != undefined && value != undefined) {
          this.lecturerIdNameDictionary.set(key, value);
        }
      });
      console.log("lecturer map taken from the DB");
    });

    this.feedbackService.getFeedbacks().subscribe(receivedFeedbacks => {
      receivedFeedbacks.forEach(element => {
        if (element.senderId != undefined) {  
          if (!element.isRequest) {
            this.feedbacks.push(element);
          }
        }
      });
      console.log("feedbacks taken from the DB");
    });
  }

  requestFeedback() {
    this.navCtrl.navigateForward('/request-feedback');
  }
}
