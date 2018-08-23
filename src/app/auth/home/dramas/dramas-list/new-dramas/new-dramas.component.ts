import { finalize } from "rxjs/operators"
import { Observable } from "rxjs"
import { DramasService } from "./../../../../../common/services/dramas.service"
import { Component, OnInit } from "@angular/core"
import { NgxDropfilesError } from "ngx-dropfiles"
import { Drama } from "../../models/drama"
import { Router } from "@angular/router"
import {
	AngularFireStorage,
	AngularFireUploadTask,
	AngularFireStorageReference
} from "angularfire2/storage"

@Component({
	selector: "app-new-dramas",
	templateUrl: "./new-dramas.component.html",
	styleUrls: ["./new-dramas.component.scss"]
})
export class NewDramasComponent implements OnInit {
	routefiles: string = "dramas"
	drama: Drama = <any>{}
	linkfile
	selectedFiles
	erroresUpload
	uploadPercent: Observable<number>
	downloadURL: Observable<string>
	fileRef: AngularFireStorageReference
	uploadTask: AngularFireUploadTask
	constructor(
		public route: Router,
		public dramaService: DramasService,
		public storage: AngularFireStorage
	) {}
	ngOnInit() {}
	onSubmit(event: Event) {
		event.preventDefault()
		//Save file
		const file = this.selectedFiles
		const drama = {
			title: this.drama.title,
			description: this.drama.description,
			episodes: this.drama.episodes,
			genre: this.drama.genre,
			emission_date: this.drama.emission_date,
			url: this.drama.url,
			urlimage: ""
		}
		//Add drama
		let dramakey = this.dramaService.addDrama(drama)
		if (dramakey !== "" && dramakey !== null && file !== undefined) {
			const filePath = `${this.routefiles}/${dramakey}/`
			const ref = this.storage.ref(filePath)
			let imageUrl
			this.uploadTask = this.storage.upload(filePath, file[0])
			this.uploadTask
				.snapshotChanges()
				.pipe(
					finalize(() => {
						ref.getDownloadURL().subscribe(url => {
							imageUrl = url
							this.dramaService.updateImageDrama(
								dramakey,
								imageUrl
							)
						})
					})
				)
				.subscribe()
			this.uploadPercent = this.uploadTask.percentageChanges()
		}
	}
	//Cancel send form
	cancel(e) {
		this.route.navigate(["dramas"])
	}
	//Get Files
	public manageFiles(files: File[]) {
		this.selectedFiles = files
	}

	public manageFilesError(files: NgxDropfilesError[]) {
		if (files.length > 0) {
			for (let i = 0; i < files.length; i++) {
				this.erroresUpload +=
					" Error: " +
					files[i].errorType +
					" for file: " +
					files[i].file.name
			}
		}
	}
}
