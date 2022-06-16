import { workInterface } from './../../../../models/data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.scss']
})
export class CardetailComponent implements OnInit {
//Hacemos un input para que el padre nos diga que único character nos quiere mandar"
@Input() public myDataCar!: workInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
