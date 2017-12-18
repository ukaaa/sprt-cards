import { NgModule } from '@angular/core';

import { PluralPipe } from './plural.pipe';

@NgModule({
  declarations: [
    PluralPipe
  ],
  exports: [
    PluralPipe
  ]
})
export class SharedModule { }
