import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MikvoComponent } from './mikvo/mikvo.component';
import { DefaultComponent } from './mikvo/dashboard/layouts/default/default.component';
import { CreateusersComponent } from './mikvo/dashboard/modules/createusers/createusers.component';
import { DesignvoucherComponent } from './mikvo/dashboard/modules/designvoucher/designvoucher.component';
import { MainComponent } from './mikvo/dashboard/modules/main/main.component';
import { ProfilesComponent } from './mikvo/dashboard/modules/profiles/profiles.component';
import { ReprintvoucherComponent } from './mikvo/dashboard/modules/reprintvoucher/reprintvoucher.component';
import { UserprofileComponent } from './mikvo/dashboard/modules/userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    MikvoComponent,
    DefaultComponent,
    CreateusersComponent,
    DesignvoucherComponent,
    MainComponent,
    ProfilesComponent,
    ReprintvoucherComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }