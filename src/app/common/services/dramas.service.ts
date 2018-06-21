import { Drama } from './../../auth/home/dramas/models/drama';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DramasService {
  dramasList
  constructor(
    public db: AngularFireDatabase
  ) { }

  getAllDramas(): Observable<any[]> {
    this.dramasList = this.db.list(`${environment.routerDrama}/`).snapshotChanges().pipe(
      map(
        data =>{
          return data.map(a =>({
            key: a.payload.key,
            data : a.payload.val()
          }))
        }
      )
    )
    return this.dramasList
  }
  getDrama() {

  }
  deleteDrama(id) {

  }
  editDrama(id) {

  }
}
