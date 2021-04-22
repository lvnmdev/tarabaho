import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the JobModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-modal',
  templateUrl: 'job-modal.html',
})
export class JobModalPage {
  company_name : string;
  company_desc : string;
  company_hr : string;
  company_contact_no : string;
  company_email : string;
  company_address : string;
  job_title : string;
  job_position: string;
  job_desc : string;
  job_sex : string;
  job_requirements : string;
  date_posted : string;
  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {
    let data = params.get('data');
    this.company_name = data.company_name;
    this.company_desc = data.company_desc;
    this.company_hr = data.company_hr;
    this.company_contact_no = data.company_contact_no;
    this.company_email = data.company_email;
    this.company_address = data.company_address;
    this.job_title = data.job_title;
    this.job_position = data.job_position;
    this.job_desc = data.job_desc;
    this.job_sex = data.job_sex;
    this.job_requirements = data.job_requirements;
    this.date_posted = data.date_posted;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobModalPage');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
