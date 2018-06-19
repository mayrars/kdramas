import { PrincipalComponent } from './public/principal/principal.component';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
		canActivate: [PublicGuard]
	},
	{
		path: 'principal',
		pathMatch: 'full',
		loadChildren: './public/principal/principal.module#PrincipalModule',
		canActivate: [PublicGuard]
	},
	{
		path: 'home',
		pathMatch: 'full',
		loadChildren: './auth/home/home.module#HomeModule',
		canActivate: [AuthGuard]
	},
	{ path: '**', pathMatch: 'full', component: NotfoundComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
