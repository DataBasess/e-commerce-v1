import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {

  list = [];

  async ngAfterViewInit() {
    await this.loadScript('assets/js/jquery.js');
    await this.loadScript('assets/js/jquery.swipebox.js');
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
  }

  ngOnInit() {
  }

}
