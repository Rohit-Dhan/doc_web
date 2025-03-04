import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    standalone: false
})
export class ReviewsComponent {
  reviews = [
    {
      name:'Namita Singh',
      feedback:'Extremely professional and knowledgeable doctor. I would definitely recommend him.',
      image:'https://lh3.googleusercontent.com/a-/ALV-UjUSUf33AHyVrEi24rDwGvsbmfeAF1RCwt7CrWm0eIhNzPSQeUyZ=w36-h36-p-rp-mo-br100',
      rating:5
    },
    {
      name: 'Situ Soni',
      feedback: 'Mera kidney Transplant docter santosh sir ne kiye jai aur mai thik hu aur mera kidney Transplant huye 1 year hua aur mai thik hu',
      rating: 5,
       image:'https://lh3.googleusercontent.com/a/ACg8ocLZweIdDD81dPhT3bMWQDr_4vGHAkqoQjRFsigxMuWj4mFeTg=w36-h36-p-rp-mo-br100'
    },
    {
      name:'Vinod Kumar',
      feedback:'Fantastic doctor always able to answer any questions I have in a kind and professional manner. I would definitely recommend him.',
      image:'https://lh3.googleusercontent.com/a-/ALV-UjWOh5lR9J48HZXMZMT89jjeGH2AaPgy3JVStjGfpmJdrwsKzYBhiA=w36-h36-p-rp-mo-br100',
      rating:5
    },{
      name:'Nitin Garg',
      feedback:'A dedicated and skilled professional—highly recommended!',
      image:'https://lh3.googleusercontent.com/a-/ALV-UjXYZx4nlvKoVU0DNBabBpNV9aM-YqglInRP3S4ps18IuHXn0zVe=w36-h36-p-rp-mo-br100',
      rating:5
    },
    {
      name: 'Pawan Pandey',
      feedback: 'Dr. Santosh sir one of the Best nephrologist & Renal Transplant expert in Lucknow. He cares all the patients with Smile. His knowledge is very High then Other nephrologist I have seen. I highly recommend to others to please come and must visit To Dr. Santosh(Max Super Speciality Hospital Lucknow ) , I am sure that you will feel very happy And blessed. Offline and online available.',
      rating: 5,
      image:'https://lh3.googleusercontent.com/a/ACg8ocI4JHhgSieE_XikaSTkpobGhy5HuZBlFlTgvLL4t1POuh7pfg=w36-h36-p-rp-mo-br100'
    },
    {
      name: 'Raj Dixit',
      feedback:
        'Mera kidney transplant hua jisme Dr shantosh sir ne max super speciality hospital me karwaya opretion k kuchh din baad hi mai pahle se bahut jada aapne aap me behtar mahsus karne laga aur fir mujhe hospital se kuchh hafte baad me discharge kar diya ab mere life pahle se bahut hi jada achhi ho gaye hai ab mai bilkul normal hu .Mai . Dr shantosh sir se poorn roop se santusht hu .Dr shantosh sir aur unke pure teem ko mujhe Naya jivan Dene k liye bahut bahut dhanyawad 🙏',
      rating: 5,
       image:'https://lh3.googleusercontent.com/a-/ALV-UjUxdvTHmdquk71iIBSNqXJHIU-1iDsItvwJhQVxrcujDZSv5rg8=w36-h36-p-rp-mo-br100'
    },
    {
      name:'Ashutosh Kumar',
      feedback:'',
      image:'https://lh3.googleusercontent.com/a-/ALV-UjWDRifMyhUqwc36UZxVKzl1PVq7YeB8dwd8-hZ6Ryn7b-4xX6I=w36-h36-p-rp-mo-br100',
      rating:5
    }
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
