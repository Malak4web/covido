import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-check4',
  templateUrl: './check4.page.html',
  styleUrls: ['./check4.page.scss'],
})
export class Check4Page implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }

}
