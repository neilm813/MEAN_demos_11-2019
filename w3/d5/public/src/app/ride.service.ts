import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  rides: any[] = [];

  constructor() { }

  removeRideByIdx(idx: number) {
    return this.rides.splice(idx, 1);
  }

  removePassengerByIdx(passengerIdx: number, rideIdx: number) {
    const targetRide = this.rides[rideIdx];
    return targetRide.passengers.splice(passengerIdx, 1);
  }
}
