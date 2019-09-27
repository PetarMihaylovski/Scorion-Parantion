import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer-home-page',
  templateUrl: './lecturer-home-page.page.html',
  styleUrls: ['./lecturer-home-page.page.scss'],
})
export class LecturerHomePagePage implements OnInit {
  feedbackRequests: any;

  constructor() { 
    this.feedbackRequests = [
      {
        sender: "John",
        context: "WebTech problems",
        date: "12-02-2001 12:04:12",
        description: "I need help with WebTech, please!!!"
      },
      {
        sender: "Bob",
        context: "Leadership issues",
        date: "05-03-2001 14:25:02",
        description: "I am not doing good. What should I do?"
      },
      {
        sender: "Sander",
        context: "Is Santa real?",
        date: "02-12-2002 16:07:12",
        description: "I really need to know!"
      },
      {
        sender: "Job",
        context: "Tech problem",
        date: "11-03-2201 12:04:12",
        description: "I need help with Tech, please!!!"
      },
      {
        sender: "BAb",
        context: "Leadership",
        date: "05-03-2011 14:25:22",
        description: "I am not doing very good."
      },
      {
        sender: "Santa",
        context: "Is Sander real?",
        date: "02-12-2003 16:07:12",
        description: "I really need to know!"
      },
      {
        sender: "",
        context: "",
        date: "-- ::",
        description: ""
      }
    ];
  }


  ngOnInit() {
  }

}
