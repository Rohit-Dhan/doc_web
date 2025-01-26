import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Chandan Sinha',
      feedback: 'Without doubt,er is unfortunately suffering from kidney problems, and I am very lucky to find Dr.er is unfortunately suffering from kidney problems, and I am very lucky to find Dr.er is unfortunately suffering from kidney problems, and I am very lucky to find Dr. the best Nephrologist you can come across.',
      rating: 5,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s'
    },
    {
      name: 'Ani Chak',
      feedback:
        'My father is unfortunately suffering from kidney problems, and I am very lucky to find Dr. Rungta.',
      rating: 5,
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s'
    },
    {
      name: 'Dipankar Bhattacharyya',
      feedback: 'Thank you.',
      rating: 5,
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s'
    },
    {
      name: 'Chandan Sinha',
      feedback: 'Without doubt, the best Nephrologist you can come across.',
      rating: 5,
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s'
    },
    {
      name: 'Ani Chak',
      feedback:
        'My father is unfortunately suffering from kidney problems, and I am very lucky to find Dr. Rungta.',
      rating: 5,
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s'
    },
    {
      name: 'Dipankar Bhattacharyya',
      feedback: 'Thank you.',
      rating: 5,
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s'
    },
    // Add more reviews as required
  ];
  isHovered = false;

  pauseScroll() {
    this.isHovered = true;
  }

  resumeScroll() {
    this.isHovered = false;
  }
}
