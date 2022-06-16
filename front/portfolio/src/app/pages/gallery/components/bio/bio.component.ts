import { workInterface } from './../../../../models/data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  @Input() public myDataCar!: workInterface;
  constructor() {}

  ngOnInit(): void {}
}
