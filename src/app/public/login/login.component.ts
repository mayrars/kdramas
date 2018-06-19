import { AuthenticationService } from './../../common/services/authentication.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { LoginModalComponent } from './loginmodal/loginmodal.component';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit  {
	dialogResult = "";
	errorMessagef = '';
	constructor(
		public dialog: MatDialog,
		public auth: AuthenticationService,
		public router: Router,
		public logged: SessionStorageService
	) { }
	afAuth = this.auth.afAuth
	ngOnInit() {
	}
	loginGoogle() {
		this.auth.logingGoogle()
		.then((data) => {
			console.log('Autorizado')
			this.logged.store('user', data)
			this.router.navigate(['home'])
		})
		.catch((error) => {
			var  errorMessage = ''
			this.auth.hasSession = false
			errorMessage = `Error : ${error.message}`
			this.errorMessagef = errorMessage
		})
	}
	logginFacebook() {
		this.auth.loginFacebook()
			.then((data) => {
				console.log('Autorizado')
				this.logged.store('user', data)
				this.router.navigate(['home'])
			})
			.catch((error) => {
				var  errorMessage = ''
				this.auth.hasSession = false
				errorMessage = `Error : ${error.message}`
				this.errorMessagef = errorMessage
			})
	}
	openModal(): void {
		let dialogref
		dialogref = this.dialog.open(LoginModalComponent, {
			width: '600px'
		})
		dialogref.afterClosed().subscribe(result => {
			this.dialogResult = result;
		})
	}
}
