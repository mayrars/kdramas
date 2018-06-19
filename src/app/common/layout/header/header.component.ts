import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	authenticate
	hasSession = false
	user
	afAuth = this.auth.afAuth
	constructor(
		public auth : AuthenticationService,
		public router : Router
	) {}
	ngOnInit() {
		this.authenticate= this.auth.isLogged()
		console.log(this.authenticate)
	}
	logOut(){
		this.auth.logOut()
		this.router.navigate([''])
	}
}
