import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CJobsPage } from './c-jobs';

@NgModule({
  declarations: [
    CJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(CJobsPage),
  ],
})
export class CJobsPageModule {}
