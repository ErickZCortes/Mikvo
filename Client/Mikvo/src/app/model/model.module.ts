import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDatasourceService } from './user/user-datasource.service';
import { UserRepositoryService } from './user/user-repository.service';
import { User } from './user/user';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    UserDatasourceService,
    UserRepositoryService, 
    User  
  ]
})
export class ModelModule { }
