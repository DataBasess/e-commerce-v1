import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  list = [];
  list01 = [];
  list02 = [];
  async ngAfterViewInit() {
    await this.loadScript('assets/js/jquery.js');
    await this.loadScript('assets/js/magiczoomplus.js');
    await this.loadScript('assets/js/owl.carousel.js');
    await this.loadScript('assets/js/bootstrap-number-input.js');
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
    for (let i = 0; i < 6; i++) {
      this.list.push({ num: i });
    }
    for (let s = 0; s < 6; s++) {
      this.list01.push({ num: s });
    }
    for (let p = 0; p < 4; p++) {
      this.list02.push({ num: p });
    }
  }

  ngOnInit() {
  }

}
