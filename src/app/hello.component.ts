import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `hello.component.html`,
  styles: [`
  h1 { font-family: Lato; }
.cell-container{
display:inline-block;
margin:0 15px;
  }
  .cell{
    border: 2px solid black;
    height:200px;
    width:200px;
  }
  .cell.selected > div{
background-color: red;
border-radius: 50%;
height: 100%;
width: 100%;
  }
    .cell.prev-selected > div{
background-color: pink;
border-radius: 50%;
height: 100%;
width: 100%;
  }
  `]
})
export class HelloComponent  {
  @Input() name: string;
  cellCount = [1, 2, 3, 4];
  positionSelected:number;
  previousPosition:number;
  constructor() {}

moveBall(i){
  this.previousPosition = this.positionSelected;
  this.positionSelected = i;
}
}
