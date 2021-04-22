import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NavTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav-tab',
  templateUrl: 'nav-tab.html'
})
export class NavTabPage {

  homeRoot = 'HomePage'
  jobsRoot = 'JobsPage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController) {}

}
