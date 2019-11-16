import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRideComponent } from './new-ride/new-ride.component';
import { AllRidesComponent } from './all-rides/all-rides.component';
import { RideComponent } from './ride/ride.component';
import { EditRideComponent } from './edit-ride/edit-ride.component';


const routes: Routes = [
  {
    path: 'rides/new',
    component: NewRideComponent
  },
  {
    path: 'rides/all',
    component: AllRidesComponent
  },
  {
    path: 'rides/edit/:id',
    component: EditRideComponent
  },
  {
    path: 'rides/:id',
    component: RideComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
