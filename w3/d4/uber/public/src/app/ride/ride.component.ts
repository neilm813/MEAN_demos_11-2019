import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {

  @Input() rideToShow: any;

  /** Used in Technique 1: see comments below
   * the rides array passed in from the parent via reference
   */
  @Input() allRides: any[];

  // the index of rideToShow passed in from the parent
  @Input() rideIdx: number;

  /** Used in Technique 2:
   * Output a custom event that other components can listen for
   * and then run a method when the listener hears the event.
   * EventEmitter is used to emit the event so it can be heard.
   * This custom event can now be added as a listener in the same way as
   * (click) listener.
   */
  @Output() rideDeleted = new EventEmitter();
  @Output() passengerDeleted = new EventEmitter();

  newPassenger: any = {
    name: ''
  };

  errors: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
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

        /** Technique 1: see all-rides.html for comment
         * Remove the ride from the rides array that was passed
         * in as @Input from the all-rides.component which will
         * trigger all-rides to be re-rendered
         */
        // this.allRides.splice(this.rideIdx, 1);

        /** Technique 2: Using @Output see all-rides.html for comment
         * and see above comment on the @Output
         */
        this.rideDeleted.emit(this.rideIdx);
      });
  }

  deletePassenger(passengerId: string, passengerIdx: number) {

    this._httpService.deletePassenger(passengerId, this.rideToShow._id)
      .subscribe((data: any) => {
        this.passengerDeleted.emit(passengerIdx);
      });
  }

}
