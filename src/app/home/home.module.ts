import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { DatosModalComponent } from './modal.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HomePageRoutingModule,
    DatosModalComponent,
    RouterModule
  ],
})
export class HomePageModule {}