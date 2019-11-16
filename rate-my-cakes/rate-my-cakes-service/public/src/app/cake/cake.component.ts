import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HttpService } from '../http.service';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  @Input() cake: any;
  @Input() cakeIdx: number;

  newRating = {
    rating: 5,
    comment: ''
  }

  constructor(
    private _httpService: HttpService,
    private _cakeService: CakeService,
  ) { }

  selectCake() {
    /** All vars pointing at selected cake from cake service will
     * be updated via reference
     */
    this._cakeService.cakes.selected = this.cake;
  }

  addReview(id) {
    this._httpService.createReview(id, this.newRating)
      .subscribe((response: any) => {
        if (response.hasOwnProperty('cake')) {
          // reset the form
          this.newRating.rating = 5;
          this.newRating.comment = '';

          this._cakeService.updateCakeByIdx(this.cakeIdx, response.cake);
        }
      });
  }
}
