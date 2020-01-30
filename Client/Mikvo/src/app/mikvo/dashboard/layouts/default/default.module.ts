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



@NgModule({
  declarations: [
    DefaultComponent,
    CreateusersComponent,
    DesignvoucherComponent,
    MainComponent,
    ProfilesComponent,
    ReprintvoucherComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    MainService
  ]

})
export class DefaultModule { }
