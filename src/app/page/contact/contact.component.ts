import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // async ngAfterViewInit() {
  //   await this.loadScript('assets/js/jquery.js');
  //   await this.loadScript('http://maps.google.com/maps/api/js?key=AIzaSyD0s6nTQGE0Fb0kduJOGAWcTXlVYn-oO_c');
  //   await this.loadScript('assets/js/google-map.js');
  // }

  // private loadScript(scriptUrl: string) {
  //   return new Promise((resolve, reject) => {
  //     const scriptElement = document.createElement('script');
  //     scriptElement.src = scriptUrl;
  //     scriptElement.onload = resolve;
  //     document.body.appendChild(scriptElement);
  //   })
  // }
  constructor() { }

  ngOnInit() {
  }

}
