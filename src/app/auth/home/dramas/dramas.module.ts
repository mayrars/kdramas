import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DramasRoutingModule } from './dramas-routing.module';
import { DramasListComponent } from './dramas-list/dramas-list.component';
import { MatCardModule, MatButtonModule, MatIconModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    DramasRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [DramasListComponent]
})
export class DramasModule { }
