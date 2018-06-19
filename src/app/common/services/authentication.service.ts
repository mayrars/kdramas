import { SessionStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	hasSession = false
	user;
	constructor(
		public afAuth: AngularFireAuth,
		public router : Router,
		public logged :  SessionStorageService
	) { }
	logingGoogle(){
		return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
	}
	loginFacebook(){
		return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
	}
	loginMail(email, password){
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
	}
	logOut(){
		this.user = null
		this.hasSession =  false
		this.logged.clear('user')
		this.afAuth.auth.signOut()
	}
	isLogged(){
		const user  = this.logged.retrieve('user')
		if(!!user)
		{
			this.user = user
			this.hasSession = true
		}
		return this.hasSession
	}
}
