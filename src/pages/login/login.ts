import { LoginInterface } from './../interface/login-interface';
import { CompanyTabPage } from './../company/company-tab/company-tab';
import { NavTabPage } from './../user/nav-tab/nav-tab';
import { CompanyFormPage } from './../company/company-form/company-form';
import { HttpService } from './../../services/http.service';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserFormPage } from '../user/user-form/user-form';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logUsername: string;
  logPassword: string;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private httpsvc: HttpService, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Logging In"
    });
    this.loading.present();
  }

  userLogin() {
    if (this.logUsername != null && this.logPassword != null) {
      this.presentLoading();

      let userLoginInfo = {
        "username": this.logUsername,
        "password": this.logPassword
      }

      this.httpsvc.loginTransaction(userLoginInfo).subscribe(
        (response:LoginInterface) => {
          this.loading.dismiss();
          localStorage.setItem('username', response.user[0].username);
          if (response.user[0].user_type == "0") {
            if (response.formFilled == 0) {
              this.navCtrl.setRoot(UserFormPage);
            }
            else {
              this.navCtrl.setRoot(NavTabPage);
            }
          }
          else if (response.user[0].user_type == "1") {
            if (response.formFilled == 0) {
              this.navCtrl.setRoot(CompanyFormPage);
            }
            else {
              this.navCtrl.setRoot(CompanyTabPage);
            }
          }
          const userLogin = this.toastCtrl.create({
            message: response.msg,
            duration: 2000
          });
          userLogin.present();
        },
        (error) => {
          this.loading.dismiss();
          console.log(error);
          const userLoginError = this.toastCtrl.create({
            message: 'Account does not exist.',
            duration: 2000
          });
          userLoginError.present();
        }
      )
    }
    else {
      const noInput = this.toastCtrl.create({
            message: 'Please complete the inputs.',
            duration: 2000
          });
          noInput.present();
    }
    
  }

  userRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
