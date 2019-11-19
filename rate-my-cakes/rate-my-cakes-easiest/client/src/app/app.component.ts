import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  newCake = {
    baker: '',
    img: ''
  };

  showCake = null;

  cakes = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.allCakes();
  }

  createCake() {
    const observable = this.httpService.create(this.newCake);
    observable.subscribe((data) => {
      console.log(data);
      this.allCakes(); // get the new list again, or append
    });
  }

  allCakes() {
    const observable = this.httpService.getAll();
    observable.subscribe((data: any) => {
      this.cakes = data;
    });
  }

  displayCake(cake) {
    this.showCake = cake; // displayCake updates showCake from null to a value
  }
}
