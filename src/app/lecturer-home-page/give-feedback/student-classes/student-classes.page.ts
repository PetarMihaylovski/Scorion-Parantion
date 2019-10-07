import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-student-classes',
  templateUrl: './student-classes.page.html',
  styleUrls: ['./student-classes.page.scss'],
})
export class StudentClassesPage implements OnInit {
  classes: any;

  constructor(private navCtrl: NavController) { 
    this.classes = [
      { 
        name: "DHI2V.Sp",
        totalOnlineStudents: 12,
        totalStudents: 27
      },
      { 
        name: "DHI2V.So",
        totalOnlineStudents: 22,
        totalStudents: 23
      },
      { 
        name: "DHI2V.Sq",
        totalOnlineStudents: 5,
        totalStudents: 12
      },
    ];
  }

  // change button segment checked property
  goToClass(studentsClass) {
    this.navCtrl.navigateForward('/give-feedback/tabs/students');
  }
  
  ngOnInit() {}
}
