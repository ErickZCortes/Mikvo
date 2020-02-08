import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import { UserDatasourceService } from './user-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  private user: User[] = [];
  private userNumber: string[] =[];
  
  constructor( private dataSourceService: UserDatasourceService) {
    dataSourceService.getUsers().subscribe((response) =>{
      this.user = response['users'];
      this.userNumber = response['users'].map(u => u.usererNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getUser(): User[]{
     return this.user;
   } 

   login(user:User){
    return this.dataSourceService.login(user)
    .subscribe((response) => {
      console.log(response);
    });
   }

   insertUser(user:User){
    return this.dataSourceService.insertUser(user)
    .subscribe((response) => {
        console.log(response);
      });
   };

   updateUser(user:User){
    return this.dataSourceService.updateUser(user)
    .subscribe((response) => {
        console.log(response);
      });
   };

}
