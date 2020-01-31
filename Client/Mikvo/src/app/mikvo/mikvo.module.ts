import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MikvoComponent } from './mikvo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './dashboard/layouts/default/default.module';


@NgModule({
  declarations: [MikvoComponent],
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
