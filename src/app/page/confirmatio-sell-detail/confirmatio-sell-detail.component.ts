import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmatio-sell-detail',
  templateUrl: './confirmatio-sell-detail.component.html',
  styleUrls: ['./confirmatio-sell-detail.component.scss']
})
export class ConfirmatioSellDetailComponent implements OnInit {

  list = [];
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.list.push({ num: i });
    }
  }

  ngOnInit() {
  }

}
