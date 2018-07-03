import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmatio-sell',
  templateUrl: './confirmatio-sell.component.html',
  styleUrls: ['./confirmatio-sell.component.scss']
})
export class ConfirmatioSellComponent implements OnInit {
  list = [];
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.list.push({ num: i });
    }
  }

  ngOnInit() {
  }

}
