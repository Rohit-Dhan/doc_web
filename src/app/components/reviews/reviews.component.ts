import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews = [
    { name: 'John Doe', feedback: 'Excellent services.' },
    { name: 'Jane Doe', feedback: 'Highly recommend!' },
    { name: 'Sam Smith', feedback: 'Professional and caring.' }
  ];
}
