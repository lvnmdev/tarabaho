import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  no_posted_jobs : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpsvc: HttpService) {
  }

  ionViewDidEnter(){
    let username = localStorage.getItem('username');
    this.httpsvc.companyStatistics(username).subscribe(
      (response) => {
        this.no_posted_jobs = response;
      },
      (error) => {

      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
