import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common/guards/auth.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dramas',
    loadChildren: './dramas/dramas.module#DramasModule',
    data : { name : 'Dramas' },
    canActivate: [ AuthGuard ]
  },
  {
    path: 'actors',
    loadChildren: './actors/actors.module#ActorsModule',
    data: { name : 'Actors' },
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
