import { WorkService } from 'src/app/services/dataservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() public work!:any;

  constructor(private WorkService: WorkService, private router: Router) { }

  ngOnInit(): void {
  }
  public editWork(work:any){
    this.WorkService.editItem(work);
    this.router.navigate(["/admin"]);
  }
}
