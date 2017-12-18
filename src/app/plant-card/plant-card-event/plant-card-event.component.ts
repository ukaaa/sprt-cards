import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

import { PlantEvent } from '../../plant-event/shared/plant-event.model';
import { PlantEventOccurrence } from '../../plant-event/shared/plant-event-occurrence.model';
import { PlantEventService } from '../../plant-event/shared/plant-event.service';

@Component({
  selector: 'sprt-plant-card-event',
  templateUrl: './plant-card-event.component.html',
  styleUrls: ['./plant-card-event.component.scss']
})
export class PlantCardEventComponent implements OnInit {
  @Input() event: PlantEvent;
  nowString: string = 'now';
  unknownString: string = 'unknown';
  activeOccurrence: PlantEventOccurrence;
  upcomingOccurrence: PlantEventOccurrence;

  constructor(private plantEventService: PlantEventService) { }

  ngOnInit() {
    this.activeOccurrence = this.plantEventService.getActiveOccurrence(this.event);
    this.upcomingOccurrence = this.plantEventService.getUpcomingOccurrence(this.event);
  }

  get remainingTimeLabel(): string {
    if (this.activeOccurrence) {
      return this.nowString;
    } else if (this.upcomingOccurrence) {
      return moment(this.upcomingOccurrence.start).fromNow();
    }
    return this.unknownString;
  }

  get remainingTimeTitle(): string | any {
    if (this.activeOccurrence) {
      return 'Until ' + moment(this.activeOccurrence.end).format('dddd, MMMM Do YYYY');
    } else if (this.upcomingOccurrence) {
      return moment(this.upcomingOccurrence.start).format('dddd, MMMM Do YYYY');
    }
    return null;
  }
}
