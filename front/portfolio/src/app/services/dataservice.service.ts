import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor(private httpClient: HttpClient) {}
  public dataURL: string = 'http://localhost:5000/works';
  public workData = {
    id: '',
    nombre_proyecto: '',
    descripcion_breve: '',
    descripcion_larga: '',
    url: '',
    date: '',
    img: '',
    disciplina: '',
    tecnologia: '',
    company: '',
  };
  public clearWork() {
    this.workData = {
      id: '',
      nombre_proyecto: '',
      descripcion_breve: '',
      descripcion_larga: '',
      url: '',
      date: '',
      img: '',
      disciplina: '',
      tecnologia: '',
      company: '',
    };
  }
  public editItem(item: any) {
    this.workData = item;
  }
  public getWorks() {
    return this.httpClient.get(this.dataURL);
  }
  public postWork(newWork: any) {
    return this.httpClient.post(this.dataURL, newWork);
  }

  public putWork(workID: any, editedWork: any) {
    return this.httpClient.put(this.dataURL + workID, editedWork);
  }

  public deleteWork(workID: any) {
    return this.httpClient.delete(this.dataURL + workID);
  }
}
