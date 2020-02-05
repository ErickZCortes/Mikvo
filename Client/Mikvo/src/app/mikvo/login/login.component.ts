import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'src/app/model/user/user-repository.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User[] = []
  constructor(private router: Router, private userRepoService: UserRepositoryService) { }

  ngOnInit() {
  }

  login(user){
    return this.userRepoService.login(user);
  }
} 
