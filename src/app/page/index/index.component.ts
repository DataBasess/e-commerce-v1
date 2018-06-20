import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  list = [];
  list01 = [];
  list02 = [];
  async ngAfterViewInit() {
    await this.loadScript('assets/engine1/jquery.js');
    await this.loadScript('assets/js/owl.carousel.js');
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
