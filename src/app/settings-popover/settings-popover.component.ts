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
  areSoundsDisabled = false;
  constructor(public popoverController: PopoverController, private navCtrl: NavController) { }

  ngOnInit() { }

  close() {
    this.popoverController.dismiss();
  }

  toggleNotifications() {
    this.areNotificationsDisabled = !this.areNotificationsDisabled;
  }

  toggleSounds() {
    this.areSoundsDisabled = !this.areSoundsDisabled;
  }

  signOut() {
    localStorage.removeItem("user");
    this.navCtrl.navigateForward('');
    this.popoverController.dismiss();
  }
}
