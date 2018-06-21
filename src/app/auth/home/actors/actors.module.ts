import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsListComponent } from './actors-list/actors-list.component';

@NgModule({
  imports: [
    CommonModule,
    ActorsRoutingModule
  ],
  declarations: [ActorsListComponent]
})
export class ActorsModule { }
