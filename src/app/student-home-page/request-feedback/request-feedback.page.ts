import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.page.html',
  styleUrls: ['./request-feedback.page.scss'],
})
export class RequestFeedbackPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToStudentHomePage() {
    this.navCtrl.navigateBack('/student-home');
  }

  goToLecturers() {
    this.navCtrl.navigateForward('/request-feedback/tabs/lecturers');
  }

  goToCourses() {
    this.navCtrl.navigateForward('/request-feedback/tabs/courses');
  }
}
