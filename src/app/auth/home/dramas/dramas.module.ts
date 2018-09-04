import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { DramasRoutingModule } from "./dramas-routing.module"
import { DramasListComponent } from "./dramas-list/dramas-list.component"
import { DramasDetailComponent } from "./dramas-detail/dramas-detail.component"
import { NewDramasComponent } from "./dramas-list/new-dramas/new-dramas.component"
import { AngularFireStorageModule } from "angularfire2/storage"

import { NgxDropfilesModule } from "ngx-dropfiles"
import {
	MatCardModule,
	MatIconModule,
	MatInputModule,
	MatFormFieldModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatProgressBarModule
} from "@angular/material"

@NgModule({
	imports: [
		CommonModule,
		DramasRoutingModule,
		MatCardModule,
		MatIconModule,
		NgxDropfilesModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		AngularFireStorageModule,
		MatProgressBarModule
	],
	declarations: [
		DramasListComponent,
		DramasDetailComponent,
		NewDramasComponent
	]
})
export class DramasModule {}
