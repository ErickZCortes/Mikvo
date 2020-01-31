import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MikvoComponent } from './mikvo/mikvo.component';
import { DefaultComponent } from './mikvo/dashboard/layouts/default/default.component';
import { MainComponent } from './mikvo/dashboard/modules/main/main.component';
import { UserprofileComponent } from './mikvo/dashboard/modules/userprofile/userprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './mikvo/login/login.component';
import { RegisterComponent } from './mikvo/register/register.component';
import { ResetPasswordComponent } from './mikvo/reset-password/reset-password.component';


const routes: Routes = [
  { path: 'mikvo', component: MikvoComponent},
  { path: '', redirectTo: 'mikvo', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ResetPasswordComponent},

  { path:'', component: DefaultComponent,
    children:[
      { path:'dashboard', component: MainComponent },
      { path: 'users', component: UserprofileComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
