import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home-feedback-options-popover',
  templateUrl: './home-feedback-options-popover.component.html',
  styleUrls: ['./home-feedback-options-popover.component.scss'],
})
export class HomeFeedbackOptionsPopoverComponent implements OnInit {
  isDeleteButtonClicked = false;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

  edit() {
    alert("will open the feedback writing page with the information of that feedback")
    this.popoverController.dismiss();
  }

  delete() {
    alert("are you sure you want to delete it popover...");
    this.isDeleteButtonClicked = true;
    //this.popoverController.dismiss();
  }

  confirmDeletion() {
    this.popoverController.dismiss();
  }

  denyDeletion() {
    this.isDeleteButtonClicked = false;
  }
}
