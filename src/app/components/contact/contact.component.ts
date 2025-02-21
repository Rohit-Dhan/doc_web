import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 28.7041, lng: 77.1025 }; // Default location (Delhi, India)
  zoom = 12; 
  consultationList: string[] = [
    "Kidney Transplant - ABO incompatible",
    "Kidney Transplant - ABO compatible",
    "Chronic Kidney Disease (CKD)",
    "Diabetic Kidney Disease",
    "Nephrotic Syndrome / Nephritic Syndrome",
    "Critical Care Nephrology",
    "Haemodialysis",
  ];
  address:any ={
    path:'First Floor, OPD F12, Max Super Speciality Hospital, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    mobile:'+91 8823449201'
  }
}
