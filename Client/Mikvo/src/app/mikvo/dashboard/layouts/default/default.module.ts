import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { CreateusersComponent } from '../../modules/createusers/createusers.component';
import { DesignvoucherComponent } from '../../modules/designvoucher/designvoucher.component';
import { MainComponent } from '../../modules/main/main.component';
import { ProfilesComponent } from '../../modules/profiles/profiles.component';
import { ReprintvoucherComponent } from '../../modules/reprintvoucher/reprintvoucher.component';
import { UserprofileComponent } from '../../modules/userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MainService } from '../../modules/main.service';
import { RouterboardComponent } from '../../modules/routerboard/routerboard.component';
import { Mikvoguard } from 'src/app/mikvoguard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    CreateusersComponent,
    DesignvoucherComponent,
    MainComponent,
    ProfilesComponent,
    ReprintvoucherComponent,
    UserprofileComponent, 
    RouterboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    MainService, Mikvoguard
  ]

})
export class DefaultModule { }
