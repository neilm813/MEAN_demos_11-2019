import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() cake;

  constructor() { }

  ngOnInit() {
  }

  calculateAverageRating(reviews) {
    let sum = 0;

    for (const review of reviews) {
      sum += review.rating;
    }
    return sum / reviews.length;
  }
}
