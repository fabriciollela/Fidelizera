import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CartoesPage } from './cartoes';

@NgModule({
  declarations: [
    CartoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CartoesPage),
    TranslateModule.forChild()
  ],
  exports: [
    CartoesPage
  ]
})
export class CartoesPageModule { }
