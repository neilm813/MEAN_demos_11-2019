import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent  {
  @Input() cake;
  @Output() selected = new EventEmitter();
  @Output() updated = new EventEmitter();

  rating: 5;
  comment: '';

  constructor(private _http: HttpService) {}

  selectCake() {
    // alert the parent component that this cake's picture was clicked on
    this.selected.emit();
  }

  addReview(id) {
    this._http.createReview(id, { rating: this.rating, comment: this.comment })
      .subscribe((response: any) => {
        if(response.hasOwnProperty('cake')) {
          // reset the form
          this.rating = 5;
          this.comment = '';
  
          // pass the updated cake to the parent component
          this.updated.emit(response.cake);
        }
      });
  }
}
