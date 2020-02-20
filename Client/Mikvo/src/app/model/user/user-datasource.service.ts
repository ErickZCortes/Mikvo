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

  getUsers(): any {
    return this.httpClient.get(this.bassUrl + '/users');
  }

  getUserbyId(uid : number): any {
    return this.httpClient.get(this.bassUrl + '/users/' + uid);
  }

  decodeToken(token:string){
    return this.httpClient.post<User>(this.bassUrl + '/users/decode', {token});
  }

  login(user: User) {
    return this.httpClient.post<User>(this.bassUrl + '/users/login', user);
  };

  /*getIdUser(array:[]) {
    return this.httpClient.post(this.bassUrl + '/users/get', array);
  };*/

  registerUser(user: User) {
    return this.httpClient.post<User>(this.bassUrl + '/users/register', user);
  };

  updateUser(user: User) {
    return this.httpClient.put<User>(this.bassUrl + '/users', user);
  };
}
