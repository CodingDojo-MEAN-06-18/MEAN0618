import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// had to get help for this assignment {OnInit}
export class AppComponent implements OnInit {
  colorArr = [];

  fillImageArray() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.colorArr.push('#3A9E9E ');
      } else if (randNum === 2) {
        this.colorArr.push('#794EB7 ');
      } else if (randNum === 3) {
        this.colorArr.push('#6BDBA3 ');
      } else if (randNum === 4) {
        this.colorArr.push('#A32679 ');
      } else if (randNum === 5) {
        this.colorArr.push('#E5AE41 ');
      } else if (randNum === 6) {
        this.colorArr.push('#00D8D2');
      } else if (randNum === 7) {
        this.colorArr.push('#D80086');
      }
    }
  }

  ngOnInit() {
    this.fillImageArray();
  }

}