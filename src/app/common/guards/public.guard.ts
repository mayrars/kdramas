import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PublicGuard implements CanActivate {
	constructor(
		public router : Router,
		public auth :  AuthenticationService
	) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			if(!this.auth.isLogged()){
				return true
			}
			console.log("Is Logged!");
			this.router.navigate(['/home'])
			return false;
	}
}
