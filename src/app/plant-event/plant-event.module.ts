import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PlantEventService } from './shared/plant-event.service';

import { PlantEventLabelComponent } from './plant-event-label/plant-event-label.component';
import { PlantEventLabelSetComponent } from './plant-event-label-set/plant-event-label-set.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PlantEventLabelComponent,
    PlantEventLabelSetComponent
  ],
  providers: [
    PlantEventService
  ],
  exports: [
    PlantEventLabelComponent,
    PlantEventLabelSetComponent
  ]
})
export class PlantEventModule { }
