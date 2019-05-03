import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MyCardsPage } from './my-cards';

@NgModule({
  declarations: [
    MyCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCardsPage),
    TranslateModule.forChild()
  ],
  exports: [
    MyCardsPage
  ]
})
export class MyCardsPageModule { }
