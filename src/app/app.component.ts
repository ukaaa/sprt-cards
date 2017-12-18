import { Component, Input, OnInit } from '@angular/core';

import { Plant } from './plant/shared/plant.model';
import { PlantService } from './plant/shared/plant.service';

const comparePlantsByName = (a: Plant, b: Plant) => {
  return a.name.botanical.localeCompare(b.name.botanical);
};

@Component({
  selector: 'sprt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() plants: Plant[];
  filters = {
    showAll: true
  };
  filterForm: any;

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.onFiltersChange(null);
  }

  showAllPlants() {
    this.plantService.getPlants().subscribe((plants: Plant[]) => this.plants = plants.sort(comparePlantsByName));
  }

  showPlantsWithActivePlantEvents() {
    this.plantService.getPlantsWithActivePlantEvents().subscribe((plants: Plant[]) => this.plants = plants.sort(comparePlantsByName));
  }

  onFiltersChange(event: any) {
    this.filters.showAll ? this.showAllPlants() : this.showPlantsWithActivePlantEvents();
  }
}
