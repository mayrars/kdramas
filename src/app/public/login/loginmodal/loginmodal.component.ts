import { AuthenticationService } from './../../../common/services/authentication.service';
import { User } from './../user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionStorageService } from "ngx-webstorage";

@Component({
	selector: 'app-login-modal',
	templateUrl: './loginmodal.component.html',
	styleUrls: ['./loginmodal.component.scss']
})

export class LoginModalComponent {
	user: User = <any>{}
	hide = true
	dialogResultPass= ""
	errormail=''
	constructor(
		public router : Router,
		public dialog : MatDialog,
		public logged : SessionStorageService,
		public auth : AuthenticationService
	) { }
	cancel(e){
		this.router.navigate(['dramas'])
	}

	onSubmit(event:Event){
		event.preventDefault()
		const user = {
		  mail : this.user.mail,
		  password : this.user.password
		}
		this.auth.loginMail(user.mail, user.password).then((data)=>{
		  this.logged.store('user', data);
			  this.dialog.closeAll()
		  this.router.navigate(['dramas'])
		}).catch((error)=>{
		  // Handle Errors here.
		  var errorCode = error.code
		  var errorMessage = error.message
		  // The email of the user's account used.
		  var email = error.email
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential
		  this.auth.hasSession = false
		  console.log(errorCode)
		  this.errormail = errorMessage

		})
	}

}
