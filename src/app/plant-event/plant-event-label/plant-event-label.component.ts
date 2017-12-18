import { Component, OnInit, Input } from '@angular/core';

import { PlantEvent } from '../shared/plant-event.model';

@Component({
  selector: 'sprt-plant-event-label',
  templateUrl: './plant-event-label.component.html',
  styleUrls: ['./plant-event-label.component.scss']
})
export class PlantEventLabelComponent implements OnInit {
  @Input() event: PlantEvent;
  @Input() label: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
