import { Component, OnInit } from "@angular/core";

import { NavController } from "@ionic/angular";
import { DataService } from "../data.service";

@Component({
  selector: "app-quizs",
  templateUrl: "./quizs.page.html",
  styleUrls: ["./quizs.page.scss"],
})
export class QuizsPage implements OnInit {
  quizs = [];
  selectedQuiz:any = [];
  start = 0;
  points = 0;
  pointsPerQ = 10;
  pointsTotal = 0;
  loading = 1;
  wrong: boolean;
  constructor(private nav: NavController, public data: DataService) {}

  ngOnInit() {
    this.data.getQuestions().then((data: any) => {
      console.log("loaded");
      // console.log(data)
      this.selectedQuiz = data[0];
      this.quizs = data;
      this.pointsTotal = this.quizs.length * this.pointsPerQ
      console.log(this.selectedQuiz);

      // if(!data) this.nav.back();
      this.loading = 0;
    });
  }

  correct(a) {
    console.log(a);
    if (a == "1") {
      if(!this.wrong) this.points += this.pointsPerQ;
      this.next();
    } else {
      this.wrong = true;
    }
  }

  next() {
    this.wrong = false;
    this.start++;
    if (this.quizs[this.start]) {
      this.selectedQuiz = this.quizs[this.start];
    } else {
      this.data.cognates(this.pointsTotal , this.points);
      this.nav.navigateRoot("/home");
    }
  }
}
