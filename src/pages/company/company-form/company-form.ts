import { CompanyTabPage } from './../../company/company-tab/company-tab';
import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CompanyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-form',
  templateUrl: 'company-form.html',
})
export class CompanyFormPage {
  companyName: string;
  companyDesc: string;
  companyHR: string;
  companyEmail: string;
  companyContactNo: string;
  companyAddress: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpsvc: HttpService, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyFormPage');
  }

  companyAccCreate(){
    let username = localStorage.getItem('username');
    
    let companyAccountInfo = {
      "username": username,
      "company_name" : this.companyName,
      "company_desc" : this.companyDesc,
      "company_hr" : this.companyHR,
      "company_email" : this.companyEmail,
      "company_contact_no" : this.companyContactNo,
      "company_address" : this.companyAddress
    }

    this.httpsvc.companyCreateAccount(companyAccountInfo).subscribe(
      (response) => {
        this.navCtrl.push(CompanyTabPage);
        const createSuccess = this.toastCtrl.create({
          message: 'Successfuly Updated.',
          duration: 2000
        });
        createSuccess.present();
      },
      (error) => {

      }
    );

  }
}
