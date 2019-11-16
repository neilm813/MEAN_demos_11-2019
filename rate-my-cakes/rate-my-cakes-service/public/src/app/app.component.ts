import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: any;
  cakes: any = null;

  constructor(
    private _httpService: HttpService,
    private _cakeService: CakeService,
  ) { }

  ngOnInit() {
    this.newCake = {
      baker_name: '',
      image_url: ''
    }

    // cakes is an obj, see it in CakeService
    this._cakeService.getFreshCakes();
    this.cakes = this._cakeService.cakes;
  }

  createCake() {
    this._httpService.createCake(this.newCake)
      .subscribe((response: any) => {
        if (response.hasOwnProperty('cake')) {
          this.cakes.all.push(response.cake);

          // reset the form
          this.newCake = {
            baker_name: '',
            image_url: ''
          }
        }
      });
  }
}