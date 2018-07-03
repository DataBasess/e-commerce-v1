import { Component } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app';
  colro = 'color-red';


  clickk() {
    this.colro = "color-green";
  }

  // public ngOnInit() {
  //   $(document).ready(function () {
  //     $("#button").click(function () {
  //       alert('ok');
  //     });
  //   });
    
  // }

}
