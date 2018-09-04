import { HttpService } from "./../../../../common/services/http.service"
import { Component, OnInit, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material"

@Component({
	selector: "app-modal-drama-detail",
	templateUrl: "./modal-drama-detail.component.html",
	styleUrls: ["./modal-drama-detail.component.scss"]
})
export class ModalDramaDetailComponent implements OnInit {
	drama
	progress = true
	constructor(
		public dialogRef: MatDialogRef<ModalDramaDetailComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		public httpService: HttpService
	) {
		this.httpService.getSingleDrama(data).subscribe(data => {
			this.drama = data
			this.progress = false
		})
	}
	ngOnInit() {}
	addDrama(e: Event) {
		e.preventDefault()
	}
}
