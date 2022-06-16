import { WorkdetailComponent } from './pages/gallery/components/workdetail/workdetail.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BioComponent } from './pages/gallery/components/bio/bio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'works', component: GalleryComponent },
  {path: 'companies', component: WorkdetailComponent },
  {path: 'workdetail', component: WorkdetailComponent },
  {path: 'bio', component: BioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
