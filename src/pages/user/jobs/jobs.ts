import { JobModalPage } from './../../user/job-modal/job-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpService } from '../../../services/http.service';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {
  dataJobs: any;
  getPostJobId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private httpsvc: HttpService) {
    
  }

  ionViewDidEnter(){
   this.showPostedJobs();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
    this.showPostedJobs();
  }

  showPostedJobs() {
    this.httpsvc.usersShowPostedJobs().subscribe(
      (response) => {
        this.dataJobs = response;
      },
      (error) => {

      }
    );
  }

  viewJob(data){
    let viewJobModal = this.modalCtrl.create(JobModalPage, {data});
    viewJobModal.present();
  }
}
