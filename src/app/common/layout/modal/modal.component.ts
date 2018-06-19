import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	constructor(
		public dialogRef: MatDialog
	) { }

	ngOnInit() {
	}

	openDialogs(title, content, width, componentName) {
		let dialogRef = this.dialogRef.open(componentName, {
			width: `${width}`,
			data: content
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}
