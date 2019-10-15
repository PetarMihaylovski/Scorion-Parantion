import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LecturerHttpService } from '../services/lecturer-http.service';
import { Lecturer } from '../modal-classes/lecturer.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})

export class LoginPage implements OnInit {
  userCredentials = {
    username: '',
    password: '',
    remembered: null
  };
  isFormValid = false;
  isUsernameValid = false;
  isPasswordValid = false;

  lecturers:Lecturer[] = [];

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private lecturerService: LecturerHttpService) {
  }

  checkCurrentForm() {
    let userObj = this.userCredentials;
    this.isUsernameValid = this.usernameValidation(userObj.username);
    this.isPasswordValid = this.passwordValidation(userObj.password);
    if (this.isUsernameValid && this.isPasswordValid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  usernameValidation(username) {
    if (username.length >= 0 && username.length <= 100) {
      return true;
    }
    return false;
  }

  passwordValidation(password) {
    if (password.length >= 0 && password.length <= 100) {
      return true;
    }
    return false;
  }

  login() {
    let user = this.lecturers.map(lecturer =>{
      return lecturer.name === this.userCredentials.username && lecturer.password === this.userCredentials.password;
    });

    if(user){
      this.navCtrl.navigateForward('lecturer-home');
    }
  }

  ngOnInit() {
    this.lecturerService.getLecturers().subscribe(lecturers =>{
      this.lecturers = lecturers;
    });
  }
}
