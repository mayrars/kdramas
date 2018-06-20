import { DramasService } from './../../common/services/dramas.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  dramas : any[]
  constructor(
    public dramasService: DramasService
  ) { }

  ngOnInit() {
    this.dramasService.getAllDramas().subscribe(data=>{
      this.dramas = data
    })
  }

}
