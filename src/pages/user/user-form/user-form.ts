import { NavTabPage } from './../nav-tab/nav-tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { HttpService } from './../../../services/http.service';

/**
 * Generated class for the UserFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserFormPage {
  userFirstName : string;
  userMidName : string;
  userLastName : string;
  userSex : string;
  userEmail : string;
  userAddress : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpsvc: HttpService, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormPage');
  }

  userAccCreate() {
    let username = localStorage.getItem('username');

    let userAccountInfo = {
      "username" : username,
      "first_name" : this.userFirstName,
      "middle_name" : this.userMidName,
      "last_name" : this.userLastName,
      "user_sex" : this.userSex,
      "user_email" : this.userEmail,
      "user_address" : this.userAddress
    }

    console.log(userAccountInfo);
    this.httpsvc.userCreateAccount(userAccountInfo).subscribe(
      (response) => {
        this.navCtrl.push(NavTabPage);
        const createSuccess = this.toastCtrl.create({
          message: 'Successfuly Updated.',
          duration: 2000
        });
        createSuccess.present();
      },
      (error) => {

      }
    );
    this.navCtrl.setRoot(NavTabPage);
  }

}
