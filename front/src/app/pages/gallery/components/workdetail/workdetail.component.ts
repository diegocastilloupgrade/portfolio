import { WorkService } from 'src/app/services/dataservice.service';
import { workInterface } from 'src/app/models/data.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workdetail',
  templateUrl: './workdetail.component.html',
  styleUrls: ['./workdetail.component.scss'],
})
export class WorkdetailComponent implements OnInit {
  @Input() public work!: any;

  constructor(private WorkService: WorkService, private router: Router) {}

  ngOnInit(): void {}

  public editWork(work: any) {
    this.WorkService.editItem(work);
    this.router.navigate(['/admin']);
  }
}
