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

  constructor(private WorkService: WorkService) {}

  ngOnInit(): void {
    this.WorkService.getWorks().subscribe((data: any) => {
      this.works = data;
      this.worksFiltrados = this.works;

      /*      const dataAPI: workInterface[] = data.works.map((mydata: any) => {
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
    this.worksFiltrados = this.works.filter(work => {
      return work.nombre_proyecto.toLowerCase().includes(valorInput.toLowerCase());
    });
  };
}
