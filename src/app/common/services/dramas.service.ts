import { Injectable } from "@angular/core"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { environment } from "../../../environments/environment"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { Drama } from "../../auth/home/dramas/models/drama"

@Injectable({
	providedIn: "root"
})
export class DramasService {
	dramasList
	drama
	constructor(public db: AngularFireDatabase) {}

	getAllDramas(): Observable<any[]> {
		this.dramasList = this.db
			.list(`${environment.routDramas}/`)
			.snapshotChanges()
			.pipe(
				map(data => {
					return data.map(a => ({
						key: a.payload.key,
						data: a.payload.val()
					}))
				})
			)
		return this.dramasList
	}
	getSingleDrama(key): Observable<Drama> {
		this.drama = this.db
			.list(`${environment.routDramas}/${key}`)
			.snapshotChanges()
			.pipe(
				map(data => {
					let json = {}
					data.forEach(data => {
						json[data.key] = data.payload.toJSON()
					})
					return (this.drama = json)
				})
			)
		return this.drama
	}
	//Delete Kdrama
	deleteDrama(key) {
		this.db.list(`${environment.routDramas}/`).remove(key)
	}
	//Insert Kdrama
	addDrama(drama) {
		return this.db.list(`${environment.routDramas}/`).push(drama).key
	}
	//Update Image
	updateImageDrama(key, link) {
		this.db
			.list(`${environment.routDramas}/`)
			.update(key, { urlimage: link })
	}
	//Edit kdrama
	updateDrama(key, data) {
		this.db
			.list(`${environment.routDramas}/`)
			.update(key, data)
			.catch(error => {
				console.log("Error to update drama")
			})
	}
}
