import { DramasDetailComponent } from './dramas-detail/dramas-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DramasListComponent } from './dramas-list/dramas-list.component';
import { NewDramasComponent } from './dramas-list/new-dramas/new-dramas.component';

const routes: Routes = [
  { path: '', component: DramasListComponent },
  {
    path: 'detail/:id',
    pathMatch: 'full',
    component: DramasDetailComponent
  },
  {
    path: 'new',
    pathMatch:'full',
    component: NewDramasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DramasRoutingModule { }
