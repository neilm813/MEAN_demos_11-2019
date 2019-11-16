import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {

  @Input() rideToShow: any;
  // the index of rideToShow passed in from the parent
  @Input() rideIdx: number;

  newPassenger: any = {
    name: ''
  };

  errors: string = '';

  constructor(
    private _httpService: HttpService,
    private _rideService: RideService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  addPassenger() {
    this._httpService.createPassenger(this.newPassenger, this.rideToShow._id)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          this.errors = data.errors.message;
        }
        else {
          // replace the passengers array with the updated rides pasengers
          // so that this component will detect a change and re-render
          // to display the new passenger
          this.rideToShow.passengers = data.ride.passengers;
          this.newPassenger.name = '';
        }
      });
  }

  deleteRide() {
    this._httpService.deleteRide(this.rideToShow._id)
      .subscribe((data: any) => {
        this._rideService.removeRideByIdx(this.rideIdx);
      });
  }

  deletePassenger(passengerId: string, passengerIdx: number) {

    this._httpService.deletePassenger(passengerId, this.rideToShow._id)
      .subscribe((data: any) => {
        this._rideService.removePassengerByIdx(passengerIdx, this.rideIdx);
      });
  }

}
