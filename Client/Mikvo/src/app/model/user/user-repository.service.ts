import { Injectable } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { User } from './user';
import { UserDatasourceService } from './user-datasource.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  private user: User[] = [];
  private userNumber: string[] = [];
  private uid:number;

  constructor(private router : Router, private dataSourceService: UserDatasourceService) {
    dataSourceService.getUsers().subscribe((response) => {
      this.user = response['users'];
      this.userNumber = response['users'].map(u => u.usererNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getUser(): User[] {
    return this.user;
  };

  getUserbyId(uid : number): any {
    return this.dataSourceService.getUserbyId(uid);
  }
  
  decodeToken(token:string){
    return this.dataSourceService.decodeToken(token)
    .subscribe((response)=>{
      console.log(response);
    });
  }
  login(user: User) {
    return this.dataSourceService.login(user)
    .subscribe((response)=>{
        this.router.navigate(['dashboard/main']);
        //console.log(response);
        localStorage.setItem('token', response.token);
    });
  };

  getToken() {
    return localStorage.getItem('token');
  };

  deleteToken() {
    localStorage.removeItem('token');
  };


  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken == null) {
      return false;
    }else if (usertoken == "undefined"){
      this.deleteToken();
      return false;
    }
    return true;
  };


  registerUser(user: User) {
    return this.dataSourceService.registerUser(user)
      .subscribe((response) => {
        console.log(response);
      });
  };

  updateUser(user: User) {
    return this.dataSourceService.updateUser(user)
      .subscribe((response) => {
        console.log(response);
      });
  };

}
