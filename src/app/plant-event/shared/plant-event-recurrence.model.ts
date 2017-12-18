export type PlantEventRecurrenceConfig = PlantEventRecurrence;

export class PlantEventRecurrence {
  years?: number;
  quarters?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;

  static from(json: any) {
    return new PlantEventRecurrence(json);
  }

  constructor(config: PlantEventRecurrenceConfig) {
    Object.assign(this, config);
  }
}
