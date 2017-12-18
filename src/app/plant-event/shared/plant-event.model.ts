import { PlantEventOccurrence } from './plant-event-occurrence.model';
import { PlantEventOccurrenceAPIConfig } from './plant-event-occurrence.model';

export class PlantEventAPIConfig {
  type: string;
  occurrences: PlantEventOccurrenceAPIConfig[];
  instructions?: string;
}

type PlantEventConfig = {
  type: string;
  occurrences: PlantEventOccurrence[];
  instructions?: string;
};

export class PlantEvent {
  type: string;
  occurrences: PlantEventOccurrence[];
  instructions?: string;

  get initial(): string {
    return this.type.substring(0, 2);
  }

  static from(json: PlantEventAPIConfig) {
    const occurrences = json.occurrences.map((occurrence) => {
      return PlantEventOccurrence.from(occurrence);
    });

    return new PlantEvent({
      type: json.type,
      occurrences,
      instructions: json.instructions
    });
  }

  constructor(config: PlantEventConfig) {
    this.type = config.type;
    this.occurrences = config.occurrences;
    this.instructions = config.instructions;
  }
};
