import { Component, HostListener } from '@angular/core';

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
  paginatedReviews: any[] = [];
  currentIndex = 0;
  reviewsPerPage = 4; // Change dynamically based on screen size

  constructor() {
    // this.updateVisibleReviews();
    this.setResponsiveReviewCount();
  }

  nextReview() {
    this.currentIndex += this.reviewsPerPage;
    if (this.currentIndex >= this.reviews.length) {
      this.currentIndex = 0; // Loop back to start
    }
    this.updateVisibleReviews();
  }

  prevReview() {
    this.currentIndex -= this.reviewsPerPage;
    if (this.currentIndex < 0) {
      this.currentIndex = this.reviews.length - this.reviewsPerPage;
    }
    this.updateVisibleReviews();
  }

  updateVisibleReviews() {
    this.paginatedReviews = this.reviews.slice(this.currentIndex, this.currentIndex + this.reviewsPerPage);
  }

  setResponsiveReviewCount() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    
    if (screenWidth < 400) {
      this.reviewsPerPage = 1;
    } else if (screenWidth > 400 && screenWidth <= 760) {
      this.reviewsPerPage = 2;
    }else if (screenWidth > 760 && screenWidth <= 1024) {
      this.reviewsPerPage = 3;
    }
     else {
      this.reviewsPerPage = 3;
    }
    this.updateVisibleReviews();
  }

  // Listen to window resize and adjust number of reviews shown
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setResponsiveReviewCount();
  }
}
