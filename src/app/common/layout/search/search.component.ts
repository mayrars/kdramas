import { ModalDramaDetailComponent } from "./../../../auth/home/dramas/modal-drama-detail/modal-drama-detail.component"
import { HttpService } from "./../../services/http.service"
import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { MatDialog } from "@angular/material"

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
	search = new FormControl("")
	dramasList: Array<any[]> = []
	messageError
	errorList
	constructor(public httpService: HttpService, public dialog: MatDialog) {}
	ngOnInit() {
		this.dramasList = []
	}
	searchdrama($e) {
		$e.preventDefault()
		this.dramasList = []
		this.httpService
			.getDramas(encodeURI(this.search.value))
			.subscribe(data => {
				this.errorList = false
				if (data.Response == "False") {
					this.errorList = true
				} else this.dramasList = data.Search
			})
	}
	openDialog(drama) {
		this.dialog.open(ModalDramaDetailComponent, {
			data: drama
		})
	}
}
