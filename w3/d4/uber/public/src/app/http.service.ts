import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
  ) { }

  allRides() {
    return this._http.get('/api/rides');
  }

  createRide(newRide: {}) {
    return this._http.post('/api/rides', newRide);
  }

  createPassenger(newPassenger: any, rideId: string) {
    return this._http.post('/api/passengers/' + rideId, newPassenger);
  }

}
