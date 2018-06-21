import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DramasListComponent } from './dramas-list/dramas-list.component';

const routes: Routes = [
  { path: '', component: DramasListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DramasRoutingModule { }
