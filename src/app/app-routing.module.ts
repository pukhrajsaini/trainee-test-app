import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'getVehicleDetails', component: VehicleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
