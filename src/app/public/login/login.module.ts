import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule, MatButtonModule } from "@angular/material";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, } from "@angular/forms";
import { MatDialogModule } from "@angular/material";
import { LoginModalComponent } from './loginmodal/loginmodal.component';

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,

	],
	declarations: [
		LoginComponent,
		LoginModalComponent
	],
	entryComponents:[
		LoginModalComponent
	]
})
export class LoginModule { }
