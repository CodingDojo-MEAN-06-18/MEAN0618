import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumServiceService {
  numbers: number[] = [];
  numbersTwo: number[] = [];
  constructor() { }
  retrieveNums(reference:number): number[] {
    if (reference === 1){
      return this.numbers;
    } else if (reference === 2){
      return this.numbersTwo;
    }
  }
  addNum(ref: number) {
    let num = Math.floor(Math.random()* 11)
    if (ref === 1){
      this.numbers.push(num)
    } else if (ref === 2){
      this.numbersTwo.push(num);
    }
  }
  balance(){
    function getSum(total, num){
      return total + num;
    }
    let temp1 = this.numbers.reduce(getSum);
    console.log(temp1);
    
    let temp2 = this.numbersTwo.reduce(getSum);
    console.log(temp2);
    
    let balanced = temp1 - temp2;
    console.log(balanced, 'balanced');
    
    return balanced;
  }
}
