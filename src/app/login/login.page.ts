import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
 isLecturer = true;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  navigateToHomeScreen() {
    if (this.isLecturer) {
      this.navCtrl.navigateForward('/lecturer-home');
    } else {
      this.navCtrl.navigateForward('/student-home');
    }
  }
}
