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
  private userNumber: number[] = [];
  private token:string;
  private infouser:User[]=[];
  constructor(private router : Router, private dataSourceService: UserDatasourceService) {
    dataSourceService.getUsers().subscribe((response) => {
      this.user = response['users'];
      this.userNumber = response['users'].map(u => u.userNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getUser(): User[] {
    return this.user;
  };

  /*getUserbyId(): User[]{
    this.decodeToken().subscribe((response:number)=>{
       this.dataSourceService.getUserbyId(response).subscribe((response)=>{
        //console.log(this.infouser = response['user']);
         this.infouser = response['user'];       
      }); 
    });
    return this.infouser;
  }*/
  
  login(user: User) {
    return this.dataSourceService.login(user)
    .subscribe((response)=>{
        console.log(response);
        this.router.navigate(['dashboard/main']);
        localStorage.setItem('token', response.token);
    });
  };

  decodeToken(): any{
    if (!this.isLoggedIn == false){
        return this.dataSourceService.decodeToken(this.getToken())
        .subscribe((response)=>{
          console.log(response);
        });   
    }
  }

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
