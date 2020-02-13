import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'src/app/model/user/user-repository.service';
import { Observable } from 'rxjs';
import { UserDatasourceService } from 'src/app/model/user/user-datasource.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   //user: User;
   user :User= {} as User;

  constructor(private router: Router, private userRepoService: UserRepositoryService) { }

  ngOnInit() {
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  login(){
    
    
    try {
      const result = this.userRepoService.login(this.user);
      if (result) {
        this.router.navigate(['/dashboard']);
        //console.log(this.userRepoService.login(user));
        //console.log(user);
        //console.log(this.user);
      }  
    }
    catch (e) {
      console.error(e);
    }
  };  
} 
