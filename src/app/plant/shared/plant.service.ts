import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Plant, PlantAPIConfig } from './plant.model';
import { PlantEventService } from '../../plant-event/shared/plant-event.service';

export interface IPlantService {
  getPlants(): Observable<Plant[]>;
}

@Injectable()
export class PlantService implements IPlantService {
  constructor(
    private http: HttpClient,
    private plantEventService: PlantEventService
) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<PlantAPIConfig[]>('./data/plants.json').map((res: any) => {
      return res.map((config: PlantAPIConfig) => Plant.from(config));
    });
  }

  getPlantsWithActivePlantEvents() {
    return this.getPlants().map((plants: Plant[]) => {
      return plants.filter((plant: Plant) => this.plantEventService.getActivePlantEvents(plant.events).length > 0);
    });
  }
}
