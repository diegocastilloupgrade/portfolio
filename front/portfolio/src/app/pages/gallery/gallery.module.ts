import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { WorkdetailComponent } from './components/workdetail/workdetail.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
//import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [GalleryComponent, WorkdetailComponent, BuscadorComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
