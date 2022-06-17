import { AppRoutingModule } from './../../app-routing.module';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/dataservice.service';
import { workInterface } from 'src/app/models/data.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public works: workInterface[] = [];
  public worksFiltrados!: any;

  constructor(private WorkService: WorkService, private router: Router) {
    console.log(router.url);
  }

  ngOnInit(): void {
    this.WorkService.getWorks().subscribe((data: any) => {
      this.works = data.works;
      console.log("esto es works", this.works);
      this.worksFiltrados = this.works;
      console.log("esto es worksFiltrados", this.worksFiltrados);
      
      /*      
      const dataAPI: workInterface[] = data.works.map((mydata: any) => {
        id:mydata.id,
        nombre_proyecto: mydata.nombre_proyecto,
        descripcion_breve: mydata.descripcion_breve,
        descripcion_larga: mydata.descripcion_larga,
        url: mydata.url,
        date: mydata.date,
        img: mydata.img,
        disciplina: mydata.disciplina,
        tecnologia: mydata.tecnologia,
        company: mydata.company
      });
      this.dataList = dataAPI;
      console.log("dataList" + this.dataList)
    });
  */
    });
  }
  public filtrarWork = (valorInput: string) => {
    this.worksFiltrados = this.works.filter((work) => {
      return work.nombre_proyecto.toLowerCase().includes(valorInput.toLowerCase());
    });
  };
}
