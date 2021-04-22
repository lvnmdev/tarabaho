import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  regUsername : string;
  regPassword : string;
  regConfirmPassword : string;
  regUserType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private httpsvc: HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  userRegister() {
    let userRegisterInfo = {
      "username" : this.regUsername,
      "password" : this.regPassword,
      "user_type" : this.regUserType
    };

    if (this.regUsername != null || this.regPassword != null || this.regConfirmPassword != null || this.regUserType != null) {
      if (this.regPassword === this.regConfirmPassword) {
        this.httpsvc.registerTransaction(userRegisterInfo).subscribe(
          (response) => {
            console.log(response);
            const userRegisterSuccess = this.toastCtrl.create({
              message: 'Successfuly Registered.',
              duration: 2000
            });
            userRegisterSuccess.present();
            this.navCtrl.pop();
          },
          (error) => {
            const userRegisterFail = this.toastCtrl.create({
              message: 'Failed to Register.',
              duration: 2000
            });
            userRegisterFail.present();
          }
        )
      }
      else {
        const userRegisterFail = this.toastCtrl.create({
          message: 'Passwords did not match.',
          duration: 2000
        });
        userRegisterFail.present();
      }
    }
    else {
      const isFormEmptyCheck = this.toastCtrl.create({
          message: 'Please complete the above form.',
          duration: 2000
        });
        isFormEmptyCheck.present();
    }
  }
}
