import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from 'src/app/model/user/user-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private userRepositoryService: UserRepositoryService) { }

  ngOnInit() {
  }

  logout() {
    this.userRepositoryService.deleteToken();
    this.router.navigate(['/login']);
}  
}
