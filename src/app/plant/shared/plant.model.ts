import { PlantEvent } from '../../plant-event/shared/plant-event.model';
import { PlantEventOccurrence } from '../../plant-event/shared/plant-event-occurrence.model';

export class PlantName {
  botanical: string;
  common: string;
}

export class PlantClassification {
  family: string;
  genus: string;
}

// export class PlantCharacteristics {
//   foliage: string;
//   habit: string;
//   hardiness: number;
// }

export type PlantConfig = Plant;

export class PlantAPIConfig {
  name: PlantName;
  classification: PlantClassification;
  events: { type: string; occurrences: string[] }[];
  notes?: string;
  color?: string;
  image?: string;
}

export class Plant {
  name: PlantName;
  classification: PlantClassification;
  events: PlantEvent[];
  notes?: string;
  color?: string;
  image?: string;

  static from(json: PlantAPIConfig) {
    const events = json.events.map((event) => {
      return new PlantEvent({
        type: event.type,
        occurrences: event.occurrences.map((occurrence) => PlantEventOccurrence.from(occurrence))
      });
    });
    return new Plant({
      name: <PlantName>json.name,
      classification: <PlantClassification>json.classification,
      events: events,
      notes: json.notes,
      color: json.color,
      image: json.image
    });
  }

  constructor(config: PlantConfig) {
    this.name = config.name;
    this.classification = config.classification;
    this.notes = config.notes;
    this.color = config.color;
    this.image = config.image;
    this.events = config.events;
  }
};
