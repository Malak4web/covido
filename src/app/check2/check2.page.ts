import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-check2',
  templateUrl: './check2.page.html',
  styleUrls: ['./check2.page.scss'],
})
export class Check2Page implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }

}
