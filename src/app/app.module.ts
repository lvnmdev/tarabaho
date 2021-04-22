import { EditJobPostPage } from './../pages/company/edit-job-post/edit-job-post';
import { JobModalPage } from './../pages/user/job-modal/job-modal';
import { CompanyFormPage } from './../pages/company/company-form/company-form';
import { CompanyTabPage } from './../pages/company/company-tab/company-tab';
import { HttpService } from './../services/http.service';
import { NavTabPage } from './../pages/user/nav-tab/nav-tab';
import { JobPostPage } from './../pages/company/job-post/job-post';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { UserFormPage } from './../pages/user/user-form/user-form';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    JobPostPage,
    NavTabPage,
    UserFormPage,
    CompanyTabPage,
    CompanyFormPage,
    JobModalPage,
    EditJobPostPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    JobPostPage,
    NavTabPage,
    UserFormPage,
    CompanyTabPage,
    CompanyFormPage,
    JobModalPage,
    EditJobPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
