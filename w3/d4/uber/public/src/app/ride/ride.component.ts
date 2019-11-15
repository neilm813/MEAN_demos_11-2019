import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {

  @Input() rideToShow: any;

  newPassenger: any = {
    name: ''
  };

  errors: string = '';

  constructor(
    private _httpService: HttpService,
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

  deleteRide(rideId) {
    console.log(rideId);
  }

  deletePassenger(passengerId) {
    console.log(passengerId);
  }

}
