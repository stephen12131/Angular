import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
// import { SharedModule } from '../SharedModule';





@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MenuComponent]
})
export class MenuModule { }
