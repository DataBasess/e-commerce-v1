import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  list = [];
  constructor() {
    for (let i = 0; i < 2; i++) {
      this.list.push({ num: i });
    }
  }

  ngOnInit() {
  }

}
