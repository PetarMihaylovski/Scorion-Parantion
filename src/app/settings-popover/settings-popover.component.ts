import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings-popover',
  templateUrl: './settings-popover.component.html',
  styleUrls: ['./settings-popover.component.scss'],
})
export class SettingsPopoverComponent implements OnInit {
  areNotificationsDisabled = false;
  constructor(public popoverController: PopoverController, private navCtrl: NavController) { }

  ngOnInit() { }

  close() {
    this.popoverController.dismiss();
  }

  toggleNotifications() {
    this.areNotificationsDisabled = !this.areNotificationsDisabled;
  }

  signOut() {
    localStorage.removeItem("user");
    this.navCtrl.navigateForward('');
    this.popoverController.dismiss();
  }
}
