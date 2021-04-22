import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyTabPage } from './company-tab';

@NgModule({
  declarations: [
    CompanyTabPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyTabPage),
  ]
})
export class CompanyTabPageModule {}
