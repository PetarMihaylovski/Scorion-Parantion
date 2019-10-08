import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  courses: any;

  constructor(private navCtrl: NavController) { 
    this.courses = [
      { 
        name: "Introduction to Programming",
        credits: 5
      },
      { 
        name: "International management",
        credits: 3
      },
      { 
        name: "Web tech",
        credits: 5
      },
      { 
        name: "Infrastructure essentials",
        credits: 3
      },
    ];
  }

  // change button segment checked property
  goToCourse(course) {
    this.navCtrl.navigateForward('/request-feedback/tabs/lecturers');
  }
  
  ngOnInit() {
  }

}
