import { Router } from "@angular/router"
import { Drama } from "./../models/drama"
import { Observable } from "rxjs"
import { DramasService } from "./../../../../common/services/dramas.service"
import { Component, OnInit } from "@angular/core"

@Component({
	selector: "app-dramas-list",
	templateUrl: "./dramas-list.component.html",
	styleUrls: ["./dramas-list.component.scss"]
})
export class DramasListComponent implements OnInit {
	dramas
	drama: Drama
	constructor(public dramaService: DramasService, public router: Router) {
		this.dramaService.getAllDramas().subscribe(data => {
			this.dramas = data
		})
	}
	ngOnInit() {}
	deleteDrama(event, key) {
		if (confirm("Are you shure to delete this item?")) {
			this.dramaService.deleteDrama(key)
		}
	}
	addDrama() {
		this.router.navigate["new"]
	}
}
