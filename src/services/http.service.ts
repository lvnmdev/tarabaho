import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    // private serverUrl = "localhost";
    private serverUrl = "172.20.10.2";
    constructor (private http: HttpClient) {

    }

    loginTransaction(userLoginInfo) {
        return this.http.post('http://'+this.serverUrl+'/restful/api/Users/users_login', userLoginInfo);
    }

    registerTransaction(userRegisterInfo) {
        return this.http.post('http://'+this.serverUrl+'/restful/api/Users/users_register', userRegisterInfo);
    }

    //USERS TRANSACTIONS
    userCreateAccount(userAccountInfo) {
        return this.http.post('http://'+this.serverUrl+'/restful/api/Users/users_CreateAccount', userAccountInfo);
    }
    
    usersShowPostedJobs(){
        return this.http.get('http://'+this.serverUrl+'/restful/api/Users/users_showJobs');
    }

    usersStatistics(){
        return this.http.get('http://'+this.serverUrl+'/restful/api/Users/users_Statistics');
    }

    //COMPANY TRANSACTIONS
    companyCreateAccount(companyAccountInfo) {
        return this.http.post('http://'+this.serverUrl+'/restful/api/Users/company_CreateAccount', companyAccountInfo);
    }

    postJobTransaction(postJobInfo) {
       return this.http.post('http://'+this.serverUrl+'/restful/api/Users/company_postJob', postJobInfo);
    }

    companyShowPostedJobs(username){
        return this.http.post('http://'+this.serverUrl+'/restful/api/Users/company_postedJobs', username);
    }

    companyDeletePostedJob(post_id:number){
        return this.http.delete('http://'+this.serverUrl+'/restful/api/Users/company_deletePostedJobs/'+post_id);
    }

    companyEditPostedJob(editPostInfo){
        return this.http.post('http://'+this.serverUrl+'/restful/api/Users/company_editPostedJobs', editPostInfo);
    }

    companyStatistics(username){
        return this.http.get('http://'+this.serverUrl+'/restful/api/Users/company_Statistics/'+username);
    }
}