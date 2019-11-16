import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.css']
})
export class AllRidesComponent implements OnInit {

  rides: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this._httpService.allRides()
      .subscribe((data: any) => {
        this.rides = data.rides;
      });
  }

  removeRideByIdx(idx: number) {
    return this.rides.splice(idx, 1);
  }

  removePassengerByIdx(passengerIdx: number, rideIdx: number) {
    const targetRide = this.rides[rideIdx];
    return targetRide.passengers.splice(passengerIdx, 1);
  }

}
