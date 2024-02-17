import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsalModule } from '@azure/msal-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DynamicComponentManifest } from './project/dynamic-modules/dynamicComponentManifest';
import { HomeModule } from './project/home/home.module';
import { RouterModule } from '@angular/router';
import { DynamicComponentLoaderModule } from './project/dynamic-modules/dynamicComponentLoaderModule';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'book',
    path: 'book',
    loadChildren: () => import('./project/book/book.module').then(m => m.BookModule)
  },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule, NgbModule,
    TableModule, ButtonModule,
    PanelModule, NgApexchartsModule,HomeModule,
    
    RouterModule.forRoot(routes, {}),
    DynamicComponentLoaderModule.forRoot(manifests),
  ],
  providers: [
  
    // DynamicComponentLoader
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

