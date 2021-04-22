import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CompanyTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-tab',
  templateUrl: 'company-tab.html'
})
export class CompanyTabPage {

  dashboardRoot = 'DashboardPage'
  cJobsRoot = 'CJobsPage'
  cProfileRoot = 'CProfilePage'


  constructor(public navCtrl: NavController) {}

}
