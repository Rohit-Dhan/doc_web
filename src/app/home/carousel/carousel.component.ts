import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    standalone: false
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
    }, 3000); // Change slide every 5 seconds
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
  images = [
    { src: 'assets/car/1.webp',text: 'Experienced Nephrologist with 15 years of expertise.', name: 'Dr. Santosh Kumar' },
    { src: 'assets/car/2.webp',text: 'Comprehensive Kidney Care, including diagnosis, treatment, and prevention.', name: 'Dr. Santosh Kumar' },
    { src: 'assets/car/3.webp', text: `Patient-Centered Approach for individualized treatment plans.`, name: 'Dr. Santosh Kumar' },
    { src: 'assets/car/4.webp', text: `Patient-Centered Approach for individualized treatment plans.`, name: 'Dr. Santosh Kumar' },
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
