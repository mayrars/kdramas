import { Injectable } from "@angular/core"
import { AngularFireDatabase } from "angularfire2/database"

@Injectable({
	providedIn: "root"
})
export class ActorService {
	constructor(public db: AngularFireDatabase) {}
	addActor() {
		console.log("Add")
	}
	deleteActor() {
		console.log("Delete")
	}
	editActor() {
		console.log("Edit")
	}
}
