import { Component, OnInit } from '@angular/core';
import { NumServiceService } from '../num-service.service';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {
  balance: number;
  constructor(private _numService: NumServiceService) { }

  ngOnInit() {
  }
  pushSum(){
    this.balance = this._numService.balance();
  }
}
