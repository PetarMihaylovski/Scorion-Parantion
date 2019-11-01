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

  ngOnInit() { 
    if (localStorage.getItem('notifications') == "true") {
      this.areNotificationsDisabled = true;
    } else if (localStorage.getItem('notifications') == "false") {
      this.areNotificationsDisabled = false;
    }
  }

  close() {
    this.popoverController.dismiss();
  }

  toggleNotifications() {
    if (localStorage.getItem('notifications') == "true") {
      localStorage.setItem('notifications', "false");
      this.areNotificationsDisabled = false;
    } else if (localStorage.getItem('notifications') == "false") {
      localStorage.setItem('notifications', "true");
      this.areNotificationsDisabled = true;
    }
  }

  signOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("notifications");
    this.navCtrl.navigateForward('');
    this.popoverController.dismiss();
  }
}
