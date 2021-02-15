import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-check3',
  templateUrl: './check3.page.html',
  styleUrls: ['./check3.page.scss'],
})
export class Check3Page implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }

}
