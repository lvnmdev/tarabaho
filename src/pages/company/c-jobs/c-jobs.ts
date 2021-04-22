import { EditJobPostPage } from './../../company/edit-job-post/edit-job-post';
import { HttpService } from './../../../services/http.service';
import { JobPostPage } from './../../company/job-post/job-post';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';

/**
 * Generated class for the CJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c-jobs',
  templateUrl: 'c-jobs.html',
})
export class CJobsPage {
  dataPostedJobs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpsvc: HttpService, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }
  ionViewDidEnter(){
    this.showCompanyPostedJobs();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CJobsPage');
  }

  postJob(){
    this.navCtrl.push(JobPostPage);
  }

  showCompanyPostedJobs(){
    let username = { 
      "username" : localStorage.getItem('username')
    };
      
    this.httpsvc.companyShowPostedJobs(username).subscribe(
      (response) => {
        this.dataPostedJobs = response;
      },
      (error) => {

      }
    );
  }

  deleteConfirm(data) {
    console.log(data);
    const delete_confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to delete this post?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.httpsvc.companyDeletePostedJob(data.jobpost_id).subscribe(
              (response) => {
                location.reload();
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        }
      ]
    });
    delete_confirm.present();
  }

  editPost(data){
    let editJobPost = this.modalCtrl.create(EditJobPostPage, {data});
    editJobPost.present();
  }

  doRefresh(refresher) {
    setTimeout(() => {
      location.reload();
      refresher.complete();
    }, 1000);
  }

}
