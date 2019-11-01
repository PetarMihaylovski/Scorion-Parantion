import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LecturerHttpService } from '../services/lecturer-http.service';
import { Lecturer } from '../modal-classes/lecturer.model';
import { Student } from '../modal-classes/student.model';
import { StudentHttpService } from '../services/student-http.service';
import { Person } from '../modal-classes/person.model';

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
  isFormValid: boolean = false;
  isUsernameValid: boolean = false;
  isPasswordValid: boolean = false;

  lecturers: Lecturer[] = [];
  students: Student[] = [];
  wrongCredentials: boolean = false;

  constructor(
    private navCtrl: NavController,
    private lecturerService: LecturerHttpService,
    private studentService: StudentHttpService) {
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
    if (username.length >= 3 && username.length <= 100) {
      return true;
    }
    return false;
  }

  passwordValidation(password) {
    if (password.length >= 3 && password.length <= 100) {
      return true;
    }
    return false;
  }

  login() {
    let lecturer: Person;
    let student: Person;



    this.lecturers.forEach(element => {
      if (element.username === this.userCredentials.username && element.password === this.userCredentials.password) {
        lecturer = element;
      }
    });

    this.students.forEach(element => {
      if (element.username === this.userCredentials.username && element.password === this.userCredentials.password) {
       student = element;
      }
    });

    if (lecturer) {
      localStorage.setItem('user', JSON.stringify(lecturer));
      this.navCtrl.navigateForward('lecturer-home');
    }
    else if (student) {
      localStorage.setItem('user', JSON.stringify(student));
      this.navCtrl.navigateForward('student-home');
    }
    else {
      this.wrongCredentials = true;
      setTimeout(()=> {
        this.wrongCredentials = false;
      }, 3000);
    }
    localStorage.setItem('notifications', "true");
  }

  ngOnInit() {
    this.lecturerService.getLecturers().subscribe(lecturers => {
      this.lecturers = lecturers;
    });
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    })
  }
}
