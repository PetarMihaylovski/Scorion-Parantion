import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FeedbackModalComponent } from 'src/app/feedback-modal/feedback-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students: any;
  
  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { 
    this.students = [
      {
        id: 1,
        name: "Bobby",
        class: "DHI2V.Sp",
        number: 578475
      },
      {
        id: 2,
        name: "Clara",
        class: "DHI2V.So",
        number: 578476
      },
      {
        id: 3,
        name: "Lara",
        class: "DHI2V.Sq",
        number: 578477
      },
      {
        id: 4,
        name: "Mark",
        class: "DHI2V.So",
        number: 57848
      },
      {
        id: 5,
        name: "Nas",
        class: "DHI2V.Sq",
        number: 578479
      },
      {
        id: 6,
        name: "Pepster",
        class: "DHI2V.Sp",
        number: 578480
      }
    ]
  }

  async showWriteFeedbackModal(student) {
    const modal = await this.modalCtrl.create({
      component: FeedbackModalComponent,
      componentProps: {
        isLecturerWritingFeedback: true,
        data: student
      }
    });
    await modal.present();
    modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))
  }

  ngOnInit() {}
}

