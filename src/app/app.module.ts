import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { NotfoundComponent } from './common/notfound/notfound.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { Ng2Webstorage } from 'ngx-webstorage';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './common/services/authentication.service';

import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    Ng2Webstorage
  ],
  providers: [
    AuthenticationService, //Services
    AuthGuard, PublicGuard //Guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
