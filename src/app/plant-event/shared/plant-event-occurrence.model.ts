import { PlantEventRecurrence } from './plant-event-recurrence.model';

import { seasons } from './plant-event.utils';

export const getSeason = (path: string): { start: string; end: string; recurrence: PlantEventRecurrence } => {
  return path.split('.').reduce((o, i) => {
    return o[i];
  }, seasons);
};

export type PlantEventOccurrenceAPIConfig = {
  start: string;
  end: string;
  recurrence: any
} | string;

export type PlantEventOccurrenceConfig = {
  start: Date;
  end: Date;
  recurrence: PlantEventRecurrence;
};

export class PlantEventOccurrence {
  start: Date;
  end: Date;
  recurrence: PlantEventRecurrence;

   static from(json: PlantEventOccurrenceAPIConfig) {
     if (typeof json === 'string') {
       json = getSeason(json);
     }
     if (!json) {
       throw new Error('Invalid value for plant event occurrence.');
     }
     return new PlantEventOccurrence({
       start: new Date(json.start),
       end: new Date(json.end),
       recurrence: PlantEventRecurrence.from(json.recurrence)
     });
   }

  constructor(config: PlantEventOccurrenceConfig) {
    this.start = config.start;
    this.end = config.end;
    this.recurrence = config.recurrence;
  }
}
