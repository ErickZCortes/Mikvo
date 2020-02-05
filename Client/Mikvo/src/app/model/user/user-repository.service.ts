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
 
  
  constructor(private dataSourceService: UserDatasourceService) {
    dataSourceService.getUsers().subscribe((response) =>{
      this.user = response['users'];
      this.userNumber = response['users'].map(u => u.usererNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getUser(): User[]{
     return this.user;
   } 

   login(user){
      return this.dataSourceService.login(user);
   }

}
