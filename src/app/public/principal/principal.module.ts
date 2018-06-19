import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MatButtonModule } from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
		PrincipalRoutingModule,
		MatButtonModule
	],
	declarations: [
		PrincipalComponent
	]
})
export class PrincipalModule { }
