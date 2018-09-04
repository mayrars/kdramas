import { Component, OnInit, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material"

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"]
})
export class ModalComponent {
	drama
	constructor(
		public dialogRef: MatDialogRef<ModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {
		this.drama = data
	}
}
