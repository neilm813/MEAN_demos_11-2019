import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: any;
  cakes = [];
  selectedCake = null;

  constructor(private _http: HttpService) {}

  getCakes() {
    this._http.getCakes().subscribe((data: any) => this.cakes = data.cakes);
  }

  ngOnInit() {
    this.newCake = {
      baker_name: '',
      image_url: ''
    }
    this.getCakes();
  }

  selectCake(cake) {
    this.selectedCake = cake;
  }

  handleSubmit() {
    this._http.createCake(this.newCake)
      .subscribe((response: any) => {
        if(response.hasOwnProperty('cake')) {
          this.cakes.push(response.cake);

          // reset the form
          this.newCake = {
            baker_name: '',
            image_url: ''
          }
        }
      });
  }

  updated(updatedCake) {
    const index = this.cakes.findIndex(cake => cake._id === updatedCake._id);
    this.cakes[index] = updatedCake;
    
    if(this.selectedCake && this.selectedCake._id === updatedCake._id) {
      this.selectedCake = updatedCake;
    }
  }
}
