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

  getRide(id: string) {
    return this._http.get('/api/rides/' + id);
  }

  updateRide(editedRide: any) {
    console.log('/api/rides/' + editedRide._id);

    return this._http.put('/api/rides/' + editedRide._id, editedRide);
  }

  // don't need to pass the id in separately, because we already have it
  // in the editedRide
  // updateRide(id: string, editedRide: any) {
  //   return this._http.put('/api/rides/' + id, editedRide);
  // }

  createRide(newRide: {}) {
    return this._http.post('/api/rides', newRide);
  }

  createPassenger(newPassenger: any, rideId: string) {
    return this._http.post('/api/passengers/' + rideId, newPassenger);
  }

  createBulkPassengers(newPassengers: any[], rideId: string) {
    return this._http.post('/api/passengers/bulk/' + rideId, newPassengers);
  }

  deleteRide(rideId: string) {
    return this._http.delete('/api/rides/' + rideId);
  }

  deletePassenger(passengerId: string, rideId: string) {
    return this._http.delete(`/api/passengers/${passengerId}/rides/${rideId}`);
  }

}
