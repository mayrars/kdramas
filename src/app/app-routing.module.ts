
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/principal'
	},
	{
		path: 'login',
		pathMatch: 'full',
		loadChildren: './public/login/login.module#LoginModule',
    data: { name : 'Login' },
		canActivate: [PublicGuard]
	},
	{
    path: 'principal',
    pathMatch: 'full',
    loadChildren: './public/principal/principal.module#PrincipalModule',
    data: { name : 'Principal' },
		canActivate: [PublicGuard]
	},
	{
		path: 'home',
    loadChildren: './auth/home/home.module#HomeModule',
    data: { name : 'Home' },
		canActivate: [AuthGuard]
  }
  ,{ path: '**', component: NotfoundComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
