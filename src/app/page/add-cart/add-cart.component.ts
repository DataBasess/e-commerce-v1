import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  list = [];
  constructor() {
    for (let i = 0; i < 6; i++) {
      this.list.push({ num: i });
    }
  }

  ngOnInit() {
  }

}
