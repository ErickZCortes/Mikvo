import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { RouterModule } from '@angular/router';
import { ModelModule } from 'src/app/model/model.module';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    SidebarComponent, 
    CardComponent, 
    PieComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    CardComponent,
    PieComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
