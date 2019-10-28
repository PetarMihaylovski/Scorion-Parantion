import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { HomeFeedbackOptionsPopoverComponent } from '../home-feedback-options-popover/home-feedback-options-popover.component';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { ModalController } from '@ionic/angular';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';
import { FeedbackHttpService } from '../services/feedback-http.service';
import { Feedback } from '../modal-classes/feedback.model';

@Component({
  selector: 'app-lecturer-home-page',
  templateUrl: './lecturer-home-page.page.html',
  styleUrls: ['./lecturer-home-page.page.scss'],
})
export class LecturerHomePagePage implements OnInit {
  feedbackRequests: Feedback[] = [];
  feedbacksGiven: Feedback[] = [];
  areRequestsToggled = true;
  feedbacks: Feedback[] = [];
  
  constructor(public popoverController: PopoverController, 
    private modalCtrl: ModalController, private router: Router, private navCtrl: NavController, private feedbackService: FeedbackHttpService) { 
  }
  
  toggleRequestsGivenScreen() {
    this.areRequestsToggled = !this.areRequestsToggled;
  }

  async feedbackOptionsPopover(event) {
    const popover = await this.popoverController.create({
      component: HomeFeedbackOptionsPopoverComponent,
      event: event
    });
    return await popover.present();
  }

  async settingsPopover(event, feedbackClicked) {
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      event: event,
      // load the feedback that was clicked
      componentProps: {
        data: null
      }
    });
    return await popover.present();
  }

  sendFeedback() {
    // this.router.navigateByUrl('/student-home');
    this.navCtrl.navigateForward('/give-feedback');
  }
  
  async showFeedbackRequestModal(feedbackRequest) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isLecturerWritingResponseFeedback: false,
        isLecturerRespondingToFeedbackRequest: true,
        data: feedbackRequest
      }
    });
    await modal.present();
    /*modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))*/
  }

  async showGivenFeedbackModal(feedbackGiven) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isLecturerReadingGivenFeedback: true,
        isLecturerEditingGivenFeedback: false,
        data: feedbackGiven
      }
    });
    await modal.present();
    /*modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))*/
  }

  ngOnInit() {
    this.feedbackService.getFeedbacks().subscribe(feedbacks => {
      this.feedbacks = feedbacks;
      
      this.feedbacks.forEach(element => {
        if (element.isRequest) {
          this.feedbackRequests.push(element);
        } else {
          this.feedbacksGiven.push(element);
        }
      });
    });
  }
}
