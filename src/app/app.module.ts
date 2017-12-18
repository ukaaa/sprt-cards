import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { PlantModule } from './plant/plant.module';
import { PlantEventModule } from './plant-event/plant-event.module';
import { PlantCardModule } from './plant-card/plant-card.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    PlantModule,
    PlantEventModule,
    PlantCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
