import { map } from "rxjs/operators"
import { Observable } from "rxjs"
import { environment } from "./../../../environments/environment"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
	providedIn: "root"
})
export class HttpService {
	constructor(public http: HttpClient) {}
	getDramas(search): Observable<any> {
		return this.http.get(`${environment.routApi}&s=${search}`)
	}
	getSingleDrama(id): Observable<any> {
		return this.http.get(`${environment.routApi}&i=${id}&plot=full`)
	}
}
