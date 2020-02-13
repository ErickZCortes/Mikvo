import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultModule } from './mikvo/dashboard/layouts/default/default.module';
import { MikvoModule } from './mikvo/mikvo.module';
import { Mikvoguard } from './mikvoguard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    MikvoModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [Mikvoguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
