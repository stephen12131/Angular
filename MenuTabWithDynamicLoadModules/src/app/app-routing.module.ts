import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './project/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: []  },
  // { path: 'app-apireport', component: ApiReportComponent },
  // { path: 'app-dashboard', component: DashboardComponent, 
    //canActivate: [MsalGuard], if we use  MsalGuard dont need to trigger arure redirect manually
    //simply apply the MsalGuard in each routes
    {
      path: 'book',
      loadChildren: () => import('./project/book/book.module').then(m => m.BookModule)
    },
    {
      path: '',
      loadChildren: () => import('./project/home/home.module').then(m => m.HomeModule)
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
