import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MikvoComponent } from './mikvo/mikvo.component';
import { DefaultComponent } from './mikvo/dashboard/layouts/default/default.component';
import { MainComponent } from './mikvo/dashboard/modules/main/main.component';
import { UserprofileComponent } from './mikvo/dashboard/modules/userprofile/userprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'mikvo', component: MikvoComponent},
  { path: '', redirectTo: 'mikvo', pathMatch: 'full' },
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
