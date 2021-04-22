import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CProfilePage } from './c-profile';

@NgModule({
  declarations: [
    CProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CProfilePage),
  ],
})
export class CProfilePageModule {}
