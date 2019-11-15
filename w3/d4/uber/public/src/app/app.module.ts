import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRideComponent } from './new-ride/new-ride.component';
import { RideComponent } from './ride/ride.component';
import { AllRidesComponent } from './all-rides/all-rides.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NewRideComponent,
    RideComponent,
    AllRidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
