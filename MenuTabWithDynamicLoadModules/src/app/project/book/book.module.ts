import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DynamicComponentLoader } from '../dynamic-modules/DynamicComponentLoader.service';
import { DYNAMIC_COMPONENT } from '../dynamic-modules/dynamicloader.static.service';
import { BookComponent } from './book.component';

////




@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    
  ],
  providers: [DynamicComponentLoader,{ provide: DYNAMIC_COMPONENT, useValue: BookComponent }],    
  //bootstrap: [CciluploadComponent],
  schemas: [NO_ERRORS_SCHEMA],
  
  

})
export class BookModule { }
