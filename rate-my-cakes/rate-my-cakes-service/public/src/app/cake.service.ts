import { Injectable, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  /** Wrapped in an object so it can be passed via reference/pointer
   * so that when it is updated, all pointers to it will be updated
  */
  cakes: any = {
    all: [],
    selected: null
  };

  constructor(
    private _httpService: HttpService,
  ) { }

  getFreshCakes() {
    this._httpService.getCakes().subscribe((response: any) => {
      this.cakes.all = response.cakes;
    });
  }

  updateCakeByIdx(idx: number, updatedCake: any) {
    this.cakes.all[idx] = updatedCake;
    this.cakes.selected = updatedCake;
  }
}
