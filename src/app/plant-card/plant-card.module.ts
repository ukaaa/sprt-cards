import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PlantEventModule } from '../plant-event/plant-event.module';

import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantCardEventComponent } from './plant-card-event/plant-card-event.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlantEventModule
  ],
  declarations: [
    PlantCardComponent,
    PlantCardEventComponent
  ],
  exports: [
    PlantCardComponent
  ]
})
export class PlantCardModule { }
