import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.css']
})
export class AllRidesComponent implements OnInit {

  rides: any[] = [];

  constructor(
    private _httpService: HttpService,
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

}
