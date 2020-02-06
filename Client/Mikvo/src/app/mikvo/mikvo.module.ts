import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MikvoComponent } from './mikvo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './dashboard/layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Mikvoguard } from '../mikvoguard';
import { User } from '../model/user/user';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [MikvoComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    DefaultModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MikvoComponent    
  ],
  providers: [Mikvoguard]
})
export class MikvoModule { }
