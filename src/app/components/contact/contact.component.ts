import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 28.7041, lng: 77.1025 }; // Default location (Delhi, India)
  zoom = 12; 
}
