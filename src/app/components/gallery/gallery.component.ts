import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone:false
})
export class GalleryComponent {
  images:string[] = [
   
  ];
  ngOnInit(){
    const imageCount = 20; // Change this to the number of images in your folder
    for (let i = 1; i <= imageCount; i++) {
      this.images.push(`assets/gallery/image${i}.jpg`);
    }
  }
}
