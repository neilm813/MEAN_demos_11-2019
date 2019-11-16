import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.component.html',
  styleUrls: ['./edit-ride.component.css']
})
export class EditRideComponent implements OnInit {

  rideToEdit: any = {
    'driver': '',
    'destination': '',
    'capacity': ''
  };

  errors: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getRide();
  }

  getRide() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getRide(params.id)
        .subscribe((data: any) => {

          if (data.hasOwnProperty('errors')) {
            this.errors = data.errors.message;
          }
          else {
            this.rideToEdit = data.ride;
          }
        });
    });
  }

  updateRide() {
    this._httpService.updateRide(this.rideToEdit)
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          this.errors = data.errors.message;
        }
        else {
          this._router.navigate(['/rides/all']);
        }
      });
  }

}
