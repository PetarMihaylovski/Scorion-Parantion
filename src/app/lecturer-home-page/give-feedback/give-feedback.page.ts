import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})
export class GiveFeedbackPage implements OnInit {
  areWeOnStudentsPage = true;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  /*
  onClick() {
    this.navCtrl.navigateBack('/lecturer-home');
    return;
  }
  */
  
  goToLecturerHomePage() {
    this.navCtrl.navigateBack('/lecturer-home');
  }

  goToStudents() {
    this.navCtrl.navigateForward('/give-feedback/tabs/students');
  }

  goToClasses() {
    this.navCtrl.navigateForward('/give-feedback/tabs/student-classes');
  }
}
