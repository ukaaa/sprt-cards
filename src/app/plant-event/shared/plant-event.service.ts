import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { PlantEvent } from './plant-event.model';
import { PlantEventOccurrence } from './plant-event-occurrence.model';

const maxOccurrenceOffset = 5;

@Injectable()
export class PlantEventService {
  constructor() { }

  getTimeUntilPlantEvent(plantEvent: PlantEvent) {
    const occurrence = this.getUpcomingOccurrence(plantEvent);
    return occurrence ? moment(occurrence.start).fromNow() : null;
  }

  getRemainingDaysForPlantEvent(plantEvent: PlantEvent) {
    const occurrence = this.getActiveOccurrence(plantEvent);
    if (!occurrence) {
      return null;
    }

    const now = moment();
    return moment(occurrence.end).diff(now, 'days');
  }

  getUpcomingOccurrence(plantEvent: PlantEvent) {
    return this.getMatchingOccurrence(plantEvent, (occurrence: any): boolean => {
      const now = moment();
      const occurrenceStart = moment(occurrence.start);
      return occurrenceStart.diff(now) >= 0;
    });
  }

  getActiveOccurrence(plantEvent: PlantEvent) {
    return this.getMatchingOccurrence(plantEvent, (occurrence: any): boolean => {
      const now = moment();
      const isPastStart = moment(occurrence.start).diff(now) < 0;
      const isBeforeEnd = moment(occurrence.end).diff(now) >= 0;
      return isPastStart && isBeforeEnd;
    });
  }

  isActive(plantEvent: PlantEvent) {
    return this.getActiveOccurrence(plantEvent) ? true : false;
  }

  getActivePlantEvents(plantEvents: PlantEvent[]) {
    return plantEvents.filter((plantEvent: PlantEvent) => this.isActive(plantEvent));
  }

  private getMatchingOccurrence(plantEvent: PlantEvent, condition) {
    let occurrence = this.getMatchingOccurrenceFromOccurrences(plantEvent.occurrences, condition);
    let i = 1;
    while (!occurrence && i < maxOccurrenceOffset) {
      occurrence = this.getMatchingOccurrenceFromOccurrences(this.getOccurrencesWithOffset(plantEvent.occurrences, i), condition);
      i++;
    }
    return occurrence;
  }

  private getMatchingOccurrenceFromOccurrences(occurrences: PlantEventOccurrence[], condition) {
    return occurrences.find((occurrence: PlantEventOccurrence) => {
      return condition(occurrence);
    });
  }

  private getOccurrencesWithOffset(occurrences: PlantEventOccurrence[], offset: number) {
    return occurrences.concat([]).map((occurrence: PlantEventOccurrence) => {
      return this.getOccurrenceWithOffset(occurrence, offset);
    });
  }

  private getOccurrenceWithOffset(occurrence: PlantEventOccurrence, offset: number) {
    const occurrenceCopy = new PlantEventOccurrence(Object.assign({}, occurrence));
    const momentOffset = this.getOccurrenceOffset(occurrenceCopy, offset);
    occurrenceCopy.start = moment(occurrenceCopy.start).add(momentOffset).toDate();
    occurrenceCopy.end = moment(occurrenceCopy.end).add(momentOffset).toDate();
    return occurrenceCopy;
  }

  private getOccurrenceOffset(occurrence: PlantEventOccurrence, offset: number) {
    const recurrenceCopy = Object.assign({}, occurrence.recurrence);
    Object.keys(recurrenceCopy).forEach(function(key) {
      recurrenceCopy[key] *= offset;
    });
    return recurrenceCopy;
  }
}
