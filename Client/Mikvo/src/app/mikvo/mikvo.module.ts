import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MikvoComponent } from './mikvo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './dashboard/layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [MikvoComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    DefaultModule
  ],
  exports: [
    MikvoComponent
  ],
})
export class MikvoModule { }
