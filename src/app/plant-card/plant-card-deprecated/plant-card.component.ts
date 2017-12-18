import { Component, OnInit, Input } from '@angular/core';

import { Plant } from '../../plant/shared/plant.model';

@Component({
  selector: 'sprt-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {
  @Input() plant: Plant;

  constructor() { }

  ngOnInit() { }
}
