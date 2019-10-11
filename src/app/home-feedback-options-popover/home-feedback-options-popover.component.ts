import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-home-feedback-options-popover',
  templateUrl: './home-feedback-options-popover.component.html',
  styleUrls: ['./home-feedback-options-popover.component.scss'],
})
export class HomeFeedbackOptionsPopoverComponent implements OnInit {
  isDeleteButtonClicked = false;
  data: any;
  
  constructor(public popoverController: PopoverController, private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

  async showEditGivenFeedbackModal() {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isLecturerReadingGivenFeedback: true,
        isLecturerEditingGivenFeedback: true,
        // TODO: find a way to load the other feedback info as well
        data: { hasBeenOpened: true }
      }
    });
    await modal.present();
    this.popoverController.dismiss();
  }

  delete() {
    this.isDeleteButtonClicked = true;
  }

  confirmDeletion() {
    this.popoverController.dismiss();
  }

  denyDeletion() {
    this.isDeleteButtonClicked = false;
  }
}
