import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'src/app/model/user/user-repository.service';
import { User } from 'src/app/model/user/user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  userprofile :User= {} as User;
  uid : number;
  constructor(private router: Router, private userRepositoryService : UserRepositoryService) { }

  ngOnInit() {
  }
}
