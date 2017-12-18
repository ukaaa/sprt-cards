import { Component, OnInit, Input } from '@angular/core';

import { Plant } from '../../plant/shared/plant.model';
import { PlantEvent } from '../../plant-event/shared/plant-event.model';
import { PlantEventService } from '../../plant-event/shared/plant-event.service';

@Component({
  selector: 'sprt-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  @Input() plant: Plant;
  activePlantEvents: PlantEvent[];
  urgentPlantEvents: PlantEvent[];

  constructor(
    private plantEventService: PlantEventService
  ) { }

  ngOnInit() {
    this.activePlantEvents = this.plantEventService.getActivePlantEvents(this.plant.events);
    this.urgentPlantEvents = this.activePlantEvents.filter((plantEvent: PlantEvent) => {
      return this.plantEventService.getRemainingDaysForPlantEvent(plantEvent) < 40;
    });
  }
}
