import { Component, OnInit } from '@angular/core';
import { NumServiceService } from '../num-service.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbersTwo: number[] = [];
  constructor(private _numService: NumServiceService) {}

  ngOnInit() {
    this.numbersTwo = this._numService.retrieveNums(2);
  }
  pushNum(){
    this._numService.addNum(2);
  }
}
