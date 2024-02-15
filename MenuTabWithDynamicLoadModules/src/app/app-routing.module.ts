import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './project/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: []  },
  // { path: 'app-apireport', component: ApiReportComponent },
  // { path: 'app-dashboard', component: DashboardComponent, 
    //canActivate: [MsalGuard], if we use  MsalGuard dont need to trigger arure redirect manually
    //simply apply the MsalGuard in each routes
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
