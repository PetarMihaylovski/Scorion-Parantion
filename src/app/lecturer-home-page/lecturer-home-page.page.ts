import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lecturer-home-page',
  templateUrl: './lecturer-home-page.page.html',
  styleUrls: ['./lecturer-home-page.page.scss'],
})
export class LecturerHomePagePage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  sendFeedback() {
    // this.router.navigateByUrl('/student-home');
    this.navCtrl.navigateForward('/give-feedback/tabs/students');
  }
}
