import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDatasourceService } from './user/user-datasource.service';
import { UserRepositoryService } from './user/user-repository.service';
import { User } from './user/user';
import { ProfileDatasourceService } from './profiles/profile.datasource.service';
import { ProfileRepositoryService } from './profiles/profile.repository.service';
import { Profile } from './profiles/profile';
import { RouterboardDatasourceService } from './routerboards/routerboard-datasource.service';
import { Routerboard } from './routerboards/routerboard';
import { TimeDatasourceService } from './times/time-datasource.service';
import { TimeRepositoryService } from './times/time-repository.service';
import { Time } from './times/time';
import { DetailvoucherDatasourceService } from './vouchers/detailvoucher-datasource.service';
import { DetailvoucherRepositoryService } from './vouchers/detailvoucher-repository.service';
import { Detailvoucher } from './vouchers/detailvoucher';
import { VoucherDatasourceService } from './vouchers/voucher-datasource.service';
import { VoucherRepositoryService } from './vouchers/voucher-repository.service';
import { Voucher } from './vouchers/voucher';
import { RouterboardRepositoryService } from './routerboards/routerboard-repository.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    ProfileDatasourceService,
    ProfileRepositoryService,
    Profile,
    RouterboardDatasourceService,
    RouterboardRepositoryService,
    Routerboard,
    TimeDatasourceService,
    TimeRepositoryService,
    Time,
    UserDatasourceService,
    UserRepositoryService, 
    User,
    DetailvoucherDatasourceService,
    DetailvoucherRepositoryService,
    Detailvoucher,
    VoucherDatasourceService,
    VoucherRepositoryService,
    Voucher
  ]
})
export class ModelModule { }
