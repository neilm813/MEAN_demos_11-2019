import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.css']
})
export class AllRidesComponent implements OnInit {

  rides: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _rideService: RideService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this._httpService.allRides()
      .subscribe((data: any) => {
        this.rides = data.rides;
        /** Give RideService a pointer/reference to our rides so they can
         * be shared / updated from any component
         */
        this._rideService.setRides(this.rides);
      });
  }

}
