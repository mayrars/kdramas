import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ActorsRoutingModule } from "./actors-routing.module"
import { ActorsListComponent } from "./actors-list/actors-list.component"
import { MatIconModule, MatButtonModule } from "@angular/material"
import { ActorService } from "../../../common/services/actor.service"

@NgModule({
	imports: [
		CommonModule,
		ActorsRoutingModule,
		MatIconModule,
		MatButtonModule
	],
	declarations: [ActorsListComponent],
	providers: [ActorService]
})
export class ActorsModule {}
