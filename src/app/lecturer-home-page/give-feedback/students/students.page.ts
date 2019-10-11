import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  getFeedbackForm() {

      this.navCtrl.navigateForward('/feedback-request-submit');

  }
}

