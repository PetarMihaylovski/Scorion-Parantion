import { Component, OnInit } from '@angular/core';
import { FeedbackModalComponent } from 'src/app/feedback-modal/feedback-modal.component';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.page.html',
  styleUrls: ['./lecturers.page.scss'],
})
export class LecturersPage implements OnInit {
  lecturers: any;
  
  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { 
    this.lecturers = [
      {
        id: 1,
        name: "Bob",
        course: "Introduction to Programming",
      },
      {
        id: 2,
        name: "Mumo",
        course: "International management",
      },
      {
        id: 3,
        name: "Nana",
        course: "Introduction to Programming",
      },
      {
        id: 4,
        name: "Leon",
        course: "International management",
      },
      {
        id: 6,
        name: "Zezo",
        course: "Web tech",
      },
      {
        id: 7,
        name: "Pepo",
        course: "Infrastructure essentials",
      }
    ]
  }

  async requestFeedbackModal(lecturer) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isStudentRequestingFeedback: true,
        data: lecturer
      }
    });
    await modal.present();
    modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))
  }

  ngOnInit() {
  }

}
