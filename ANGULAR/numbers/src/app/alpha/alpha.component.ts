import { Component, OnInit } from '@angular/core';
import { NumServiceService } from '../num-service.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];
  constructor(private _numService: NumServiceService) {}

  ngOnInit() {
    this.numbers = this._numService.retrieveNums(1);
  }
  pushNum(){
    this._numService.addNum(1);
  }
}
