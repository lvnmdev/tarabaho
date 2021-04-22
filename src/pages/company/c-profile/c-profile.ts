import { LoginPage } from './../../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';

/**
 * Generated class for the CProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c-profile',
  templateUrl: 'c-profile.html',
})
export class CProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CProfilePage');
  }

  userLogout(){
    localStorage.clear();
    this.app.getRootNav().setRoot(LoginPage);
  }

}
