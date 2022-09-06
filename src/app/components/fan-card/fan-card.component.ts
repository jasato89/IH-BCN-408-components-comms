import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fan } from 'src/app/models/fan';

@Component({
  selector: 'app-fan-card',
  templateUrl: './fan-card.component.html',
  styleUrls: ['./fan-card.component.css']
})
export class FanCardComponent implements OnInit {

  @Output()
  fanDeleted = new EventEmitter<number>();

  @Input()
  fan: Fan;
  @Input("fanIndex")
  index: number;



  constructor() {
    this.fan = new Fan("", 0, "", "");
    this.index = 0;
   }

  ngOnInit(): void {
    
  }

  changeTeam() {
    

  }

  deleteFan() {
    this.fanDeleted.emit(this.index);

  }

}
