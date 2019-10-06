import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})
export class GiveFeedbackPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }
  /*
  onClick() {
    this.navCtrl.navigateBack('/lecturer-home');
    return;
  }
  */

}
