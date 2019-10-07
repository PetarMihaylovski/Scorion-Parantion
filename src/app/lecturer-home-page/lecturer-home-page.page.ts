import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HomeFeedbackOptionsPopoverComponent } from '../home-feedback-options-popover/home-feedback-options-popover.component';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { ModalController } from '@ionic/angular';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-lecturer-home-page',
  templateUrl: './lecturer-home-page.page.html',
  styleUrls: ['./lecturer-home-page.page.scss'],
})
export class LecturerHomePagePage implements OnInit {
  feedbackRequests: any;
  feedbacksGiven: any;
  areRequestsToggled = true;
  
  constructor(public popoverController: PopoverController, private modalCtrl: ModalController) { 
    this.feedbackRequests = [
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

    this.feedbacksGiven = [
      {
        recipient: "Johny",
        context: "WebTech issue",
        date: "12-02-2011 12:04:12",
        description: "Please!!!",
        hasBeenOpened: false
      },
      {
        recipient: "Danny",
        context: "Leadership problem",
        date: "05-03-2011 14:25:02",
        description: "What should I do?",
        hasBeenOpened: true
      },
      {
        recipient: "Bobby",
        context: "Santa?",
        date: "02-12-2012 16:07:12",
        description: "I think I saw Santa!",
        hasBeenOpened: false
      },
      {
        recipient: "Sandy",
        context: "Tech",
        date: "11-03-2211 12:04:12",
        description: "I need help!!!",
        hasBeenOpened: false
      },
      {
        recipient: "Michelle",
        context: "Bomb",
        date: "05-03-2021 14:25:22",
        description: "There is a bomb!",
        hasBeenOpened: true
      },
      {
        recipient: "Santa",
        context: "Is Sander real?",
        date: "02-12-2013 16:07:12",
        description: "I really need to know!",
        hasBeenOpened: false
      },
      {
        recipient: "",
        context: "",
        date: "-- ::",
        description: "",
        hasBeenOpened: false
      }
    ];
  }
  
  toggleRequestsGivenScreen() {
    this.areRequestsToggled = !this.areRequestsToggled;
  }

  goToStudentCoursesPage() {
    alert("go to Student/Courses page");
  }

  async feedbackOptionsPopover(event) {
    const popover = await this.popoverController.create({
      component: HomeFeedbackOptionsPopoverComponent,
      event: event
    });
    return await popover.present();
  }

  async settingsPopover(event) {
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      event: event
    });
    return await popover.present();
  }

  async showFeedbackRequestModal(feedbackRequest) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isRequest: true,
        data: feedbackRequest
      }
    });
    await modal.present();
    modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))
  }

  async showFeedbackGivenModal(feedbackGiven) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isRequest: false,
        data: feedbackGiven
      }
    });
    await modal.present();
    modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))
  }

  ngOnInit() {
  }
}
