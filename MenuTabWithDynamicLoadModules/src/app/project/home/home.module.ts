import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home.component';

import { DynamicComponentLoader } from '../dynamic-modules/DynamicComponentLoader.service';






@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
  ],
  providers:[
    DatePipe,DynamicComponentLoader
  ],
  bootstrap: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
