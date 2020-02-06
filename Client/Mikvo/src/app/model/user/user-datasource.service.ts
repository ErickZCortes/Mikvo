import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

const PROTOCOL = 'http';

@Injectable({
  providedIn: 'root'
})
export class UserDatasourceService {

  private bassUrl: string;

  constructor(private httpClient: HttpClient) { 
   this.bassUrl = `${PROTOCOL}://${location.hostname}/mikvo/api`; 
  };

  getUsers(): any{
    return this.httpClient.get(this.bassUrl + '/users');
  }

  login(user: User){
    return this.httpClient.post<User>(this.bassUrl + '/users/login',user)};
}
