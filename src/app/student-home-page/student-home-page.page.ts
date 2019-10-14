import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.page.html',
  styleUrls: ['./student-home-page.page.scss'],
})
export class StudentHomePagePage implements OnInit {
  feedbacks: any;
  areFeedbacksToggled = true;
  
  constructor(public popoverController: PopoverController, 
    private modalCtrl: ModalController, private router: Router, private navCtrl: NavController) { 
    this.feedbacks = [
      {
        sender: "John",
        context: "WebTech problems",
        date: "12-02-2001 12:04:12",
        description: "I need help with WebTech, please!!!"
      },
      {
        sender: "Bob",
        context: "Leadership issues",
        date: "05-03-2001 14:25:02",
        description: "I am not doing good. What should I do?"
      },
      {
        sender: "Sander",
        context: "Is Santa real?",
        date: "02-12-2002 16:07:12",
        description: "I really need to know!"
      },
      {
        sender: "Job",
        context: "Tech problem",
        date: "11-03-2201 12:04:12",
        description: "I need help with Tech, please!!!"
      },
      {
        sender: "Bab",
        context: "Leadership",
        date: "05-03-2011 14:25:22",
        description: "I am not doing very good."
      },
      {
        sender: "Santa",
        context: "Is Sander real?",
        date: "02-12-2003 16:07:12",
        description: "I really need to know!"
      },
      {
        sender: "",
        context: "",
        date: "-- ::",
        description: ""
      }
    ];
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
  }

  requestFeedback() {
    this.navCtrl.navigateForward('/request-feedback');
  }
}
