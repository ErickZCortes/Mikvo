import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MikvoComponent } from './mikvo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './dashboard/layouts/default/default.module';
import { RouterboardComponent } from './dashboard/modules/routerboard/routerboard.component';


@NgModule({
  declarations: [MikvoComponent, RouterboardComponent],
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
