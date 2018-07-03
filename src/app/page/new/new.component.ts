import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  list = [];
  constructor() {
    for (let i = 0; i < 6; i++) {
      this.list.push({ num: i });
    }
  }

  ngOnInit() {
  }

}
