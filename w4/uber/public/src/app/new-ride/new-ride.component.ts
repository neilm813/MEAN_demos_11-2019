import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {

  newRide: {} = {
    driver: "",
    destination: "",
    capacity: null,
  }

  validationErrors = null;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  createRide() {
    this._httpService.createRide(this.newRide)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          this.validationErrors = data.errors;
          // don't redirect, so errors can be seen
        }
        else {
          this._router.navigate(['/rides/all']);
        }
      })
  }

}
