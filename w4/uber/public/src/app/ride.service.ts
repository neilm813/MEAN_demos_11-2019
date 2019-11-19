import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  private _rides: any[] = [];

  constructor() { }

  setRides(rides: any[]) {
    this._rides = rides;
  }

  getRides() {
    return this._rides;
  }

  removeRideByIdx(idx: number) {
    return this._rides.splice(idx, 1);
  }

  removePassengerByIdx(passengerIdx: number, rideIdx: number) {
    const targetRide = this._rides[rideIdx];
    return targetRide.passengers.splice(passengerIdx, 1);
  }
}
