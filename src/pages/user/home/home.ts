import { HttpService } from './../../../services/http.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Chart } from 'chart.js';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  available_jobs : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpsvc: HttpService) {
    
  }

  ionViewDidEnter(){
    this.httpsvc.usersStatistics().subscribe(
      (response) => {
        console.log(response);
        this.available_jobs = response;
      },

      (error) => {

      }
    );

    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    //   type: 'doughnut',
    //   data: {
    //     labels: ["Red", "Blue"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)'
    //       ],
    //       hoverBackgroundColor: [
    //         "#FF6384",
    //         "#36A2EB"
    //       ]
    //     }]
    //   }
    // });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
