import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list01 = [];

  async ngAfterViewInit() {
    await this.loadScript('assets/js/jquery.js');
    await this.loadScript('assets/js/jquery.cookie.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }

  constructor() {

    for (let s = 0; s < 12; s++) {
      this.list01.push({ num: s });
    }

  }

  ngOnInit() {
  }

}
