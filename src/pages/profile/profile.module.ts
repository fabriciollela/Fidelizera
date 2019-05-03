import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { profilePage } from './profile';

@NgModule({
  declarations: [
    profilePage,
  ],
  imports: [
    IonicPageModule.forChild(profilePage),
    TranslateModule.forChild()
  ],
  exports: [
    profilePage
  ]
})
export class profilePageModule { }
