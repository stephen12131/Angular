import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuModule } from '../menu/menu.module';
// import { SharedModule } from '../SharedModule';





@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,MenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
