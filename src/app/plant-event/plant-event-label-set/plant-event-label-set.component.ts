import { Component, OnInit, Input } from '@angular/core';

import { PlantEvent } from '../shared/plant-event.model';

@Component({
  selector: 'sprt-plant-event-label-set',
  templateUrl: './plant-event-label-set.component.html',
  styleUrls: ['./plant-event-label-set.component.scss']
})
export class PlantEventLabelSetComponent implements OnInit {
  @Input() events: PlantEvent[];
  @Input() max: number;
  visibleEvents: PlantEvent[];
  hiddenEvents: PlantEvent[];

  constructor() { }

  ngOnInit() {
    if (!this.max || this.max === this.events.length) {
      this.visibleEvents = this.events;
      this.hiddenEvents = [];
    } else {
      this.visibleEvents = this.events.slice(0, this.max - 1);
      this.hiddenEvents = this.events.slice(this.max - 1);
    }
  }
}
