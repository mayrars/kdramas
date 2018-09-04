import { ActorService } from "./../../../../common/services/actor.service"
import { Component, OnInit } from "@angular/core"

@Component({
	selector: "app-actors-list",
	templateUrl: "./actors-list.component.html",
	styleUrls: ["./actors-list.component.scss"]
})
export class ActorsListComponent implements OnInit {
	constructor(public actorService: ActorService) {}

	ngOnInit() {}
	deleteActor() {}

}
