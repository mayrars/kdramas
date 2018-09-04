import { HttpService } from "./common/services/http.service"
import { SearchComponent } from "./common/layout/search/search.component"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./common/layout/header/header.component"
import { NotfoundComponent } from "./common/notfound/notfound.component"

import { AppRoutingModule } from "./app-routing.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {
	MatIconModule,
	MatAutocompleteModule,
	MatInputModule,
	MatDialogModule,
	MatProgressSpinnerModule,
	MatButtonModule
} from "@angular/material"
import { AngularFireModule } from "angularfire2"
import { AngularFireDatabaseModule } from "angularfire2/database"
import { AngularFireAuthModule } from "angularfire2/auth"
import { Ng2Webstorage } from "ngx-webstorage"
import { RouterModule } from "@angular/router"

import { AuthenticationService } from "./common/services/authentication.service"

import { PublicGuard } from "./common/guards/public.guard"
import { AuthGuard } from "./common/guards/auth.guard"

import { environment } from "../environments/environment"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { ModalComponent } from "./common/layout/modal/modal.component"
import { ModalDramaDetailComponent } from "./auth/home/dramas/modal-drama-detail/modal-drama-detail.component"

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NotfoundComponent,
		SearchComponent,
		ModalComponent,
		ModalDramaDetailComponent
	],
	imports: [
		AppRoutingModule,
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatAutocompleteModule,
		MatInputModule,
		MatButtonModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		Ng2Webstorage,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		MatDialogModule,
		MatProgressSpinnerModule
	],
	providers: [
		AuthenticationService, //Services
		HttpService,
		AuthGuard,
		PublicGuard, //Guards
		ModalComponent,
		ModalDramaDetailComponent
	],
	entryComponents: [ModalComponent, ModalDramaDetailComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
