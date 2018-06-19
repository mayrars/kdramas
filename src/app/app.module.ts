import { AuthGuard } from './common/guards/auth.guard';
import { AuthenticationService } from './common/services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { AngularFireModule }  from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { Ng2Webstorage } from 'ngx-webstorage';
import { PublicGuard } from './common/guards/public.guard';
import { environment } from '../environments/environment';
import { NotfoundComponent } from './common/notfound/notfound.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		Ng2Webstorage,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule
	],
	providers: [
		AuthenticationService, //Services
		AuthGuard, PublicGuard //Guards

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
