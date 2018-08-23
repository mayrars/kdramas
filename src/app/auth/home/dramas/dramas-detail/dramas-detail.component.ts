import { environment } from "./../../../../../environments/environment"
import { DramasService } from "./../../../../common/services/dramas.service"
import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Drama } from "../models/drama"
import { NgxDropfilesError } from "ngx-dropfiles"
import { Router } from "@angular/router"
import { AngularFireStorage, AngularFireUploadTask } from "angularfire2/storage"
import { finalize } from "rxjs/operators"
import { Observable } from "rxjs"

@Component({
	selector: "app-dramas-detail",
	templateUrl: "./dramas-detail.component.html",
	styleUrls: ["./dramas-detail.component.scss"]
})
export class DramasDetailComponent implements OnInit {
	drama: Drama = <any>{}
	keyDrama
	progress = true
	selectedFiles
	linkfile: string
	erroresUpload: string
	routefiles: string = "dramas"
	loadimage = false
	uploadPercent
	uploadTask: AngularFireUploadTask
	constructor(
		public dramaService: DramasService,
		public aRoute: ActivatedRoute,
		public route: Router,
		public storage: AngularFireStorage
	) {}

	ngOnInit() {
		//Get the item to init
		this.aRoute.params.subscribe(data => {
			this.keyDrama = data.id
			this.dramaService.getSingleDrama(this.keyDrama).subscribe(data => {
				this.drama = data as Drama
				this.progress = false
			})
		})
	}
	//Load the funtions to image
	public manageFiles(files: File[]) {
		this.selectedFiles = files
		const filePath = `${this.routefiles}/${this.keyDrama}`
		const ref = this.storage.ref(filePath)
		this.uploadTask = this.storage.upload(filePath, this.selectedFiles[0])
		let imageURL
		this.loadimage = true
		this.uploadTask
			.snapshotChanges()
			.pipe(
				finalize(() => {
					ref.getDownloadURL().subscribe(data => {
						imageURL = data
						this.dramaService.updateImageDrama(
							this.keyDrama,
							imageURL
						)
						this.loadimage = false
					})
				})
			)
			.subscribe()
		this.uploadTask.percentageChanges().subscribe(data => {
			this.uploadPercent = data
		})
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
	//Get images
	getFiles(e: Event) {
		this.selectedFiles = (event.target as HTMLInputElement).files
	}
	cancel(event) {
		this.route.navigate["dramas"]
	}
	onSubmit(e: Event) {
		e.preventDefault()
		const file = this.selectedFiles
		const nvalues = {
			title: this.drama.title,
			description: this.drama.description,
			url: this.drama.url,
			episodes: this.drama.episodes,
			emission_date: this.drama.emission_date,
			genre: this.drama.genre
		}
		this.dramaService.updateDrama(this.keyDrama, nvalues)
		this.route.navigate(["home/dramas"])
	}
	deleteLinkImage(e: Event) {
		e.preventDefault()
		if (confirm("Are you shure to delete this image?")) {
			let storageRef = this.storage
				.ref(`${this.routefiles}/${this.keyDrama}`)
				.delete()
			this.linkfile = ""
			this.dramaService.updateImageDrama(this.keyDrama, "")
		}
	}
}
