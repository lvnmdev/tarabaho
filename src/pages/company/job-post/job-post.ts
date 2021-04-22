import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpService } from './../../../services/http.service';

/**
 * Generated class for the JobPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-post',
  templateUrl: 'job-post.html',
})
export class JobPostPage {
  jobTitle : string;
  jobDescription : string;
  jobPosition : string;
  jobSex : string;
  jobRequirements : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private httpsvc: HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPostPage');
  }

  postJob() {
    let postJobInfo = {
      'username' : localStorage.getItem('username'),
      'job_title' : this.jobTitle,
      'job_desc' : this.jobDescription,
      'job_position' : this.jobPosition,
      'job_sex' : this.jobSex,
      'job_requirements' : this.jobRequirements
    }

    if(this.jobTitle != null || this.jobDescription != null || this.jobPosition != null || this.jobSex != null || this.jobRequirements != null) {
      this.httpsvc.postJobTransaction(postJobInfo).subscribe(
        (response) => {
          const postJobSuccess = this.toastCtrl.create({
            message: 'Successfuly Posted.',
            duration: 2000
          });
          postJobSuccess.present();
          this.navCtrl.pop();
        },
        (error) => {
          const postJobFail = this.toastCtrl.create({
            message: 'Failed to Post.',
            duration: 2000
          });
          postJobFail.present();
        }
      )
    }
    else {
      const emptyForm = this.toastCtrl.create({
        message: 'Please complete the form above.',
        duration: 2000
      });
      emptyForm.present();
    }
    
  }

}
