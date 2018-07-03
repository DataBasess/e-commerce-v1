import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  async ngAfterViewInit() {
    await this.loadScript('assets/js/jquery.js');
    await this.loadScript('assets/js/jquery-ui.js');
    await this.loadScript('assets/js/category.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }



  constructor() { }

  ngOnInit() {
  }

}
