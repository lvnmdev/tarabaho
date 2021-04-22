import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditJobPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-job-post',
  templateUrl: 'edit-job-post.html',
})
export class EditJobPostPage {
  editJobTitle: string;
  editJobDescription: string;
  editJobPosition: string;
  editJobSex: string;
  editJobRequirements: string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private httpsvc: HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditJobPostPage');
    let data = this.navParams.get('data');

    this.editJobTitle = data.job_title;
    this.editJobDescription = data.job_desc;
    this.editJobPosition = data.job_position;
    this.editJobSex = data.job_sex;
    this.editJobRequirements = data.job_requirements;
  }

  editPostJob(){
    let data = this.navParams.get('data');
    let editPostInfo = {
      'jobpost_id': data.jobpost_id,
      'job_title' : this.editJobTitle,
      'job_desc' : this.editJobDescription,
      'job_position' : this.editJobPosition,
      'job_sex' : this.editJobSex,
      'job_requirements' : this.editJobRequirements
    }

    this.httpsvc.companyEditPostedJob(editPostInfo).subscribe(
      (response) => {
        console.log(response);
        this.dismissModal();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }
}
