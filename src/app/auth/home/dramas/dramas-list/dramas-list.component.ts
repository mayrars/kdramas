import { Drama } from './../models/drama';
import { Observable } from 'rxjs';
import { DramasService } from './../../../../common/services/dramas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dramas-list',
  templateUrl: './dramas-list.component.html',
  styleUrls: ['./dramas-list.component.scss']
})
export class DramasListComponent implements OnInit {
  dramas
  constructor(
    public dramaService : DramasService
  ) {
    this.dramaService.getAllDramas().subscribe(data=>{
      this.dramas = data
    })
  }
  ngOnInit() {
  }
}
