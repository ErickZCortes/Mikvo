import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'src/app/model/user/user-repository.service';
import { Observable } from 'rxjs';
import { UserDatasourceService } from 'src/app/model/user/user-datasource.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   //user: User;
   user :User= {} as User;
   private token : string;

  constructor(private router: Router, private userRepoService: UserRepositoryService) { }

  ngOnInit() {
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  login(){
    this.userRepoService.login(this.user);
      
     
     
     //this.userRepoService.decodeToken(this.token);
  };  
} 
