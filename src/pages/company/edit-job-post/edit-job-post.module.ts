import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditJobPostPage } from './edit-job-post';

@NgModule({
  declarations: [
    EditJobPostPage,
  ],
  imports: [
    IonicPageModule.forChild(EditJobPostPage),
  ],
})
export class EditJobPostPageModule {}
