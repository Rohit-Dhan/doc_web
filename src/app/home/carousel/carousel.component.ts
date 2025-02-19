import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  autoScrollInterval: any;

  ngOnInit() {
    // Start auto-scrolling
    this.startAutoScroll();
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, 2000); // Change slide every 5 seconds
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
  images = [
    { src: 'https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259', text: 'Holistic Approach to Kidney Problems', name: 'Dr. Rohit Rungta' },
    { src: 'https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg?w=400&h=300&c=crop', text: 'One of the best Renal Transplant Physician in Kolkata', name: 'Dr. Rohit Rungta' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB96j7gmCHO4oIV_MYqrTmMXeOoDtMakn4-A&s', text: 'One of the Experienced Nephrologist in Kolkata', name: 'Dr. Rohit Rungta' }
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
