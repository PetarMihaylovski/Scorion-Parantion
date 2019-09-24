import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.page.html',
  styleUrls: ['./student-home-page.page.scss'],
})
export class StudentHomePagePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
}
