import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MatButtonModule, MatCardModule } from "@angular/material";
import { DramasService } from '../../common/services/dramas.service';

@NgModule({
	imports: [
		CommonModule,
		PrincipalRoutingModule,
    MatButtonModule,
    MatCardModule
	],
	declarations: [
		PrincipalComponent
  ],
  providers: [
    DramasService
  ]

})
export class PrincipalModule { }
