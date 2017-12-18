import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantService } from './shared/plant.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PlantService],
  declarations: []
})
export class PlantModule { }
