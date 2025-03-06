import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 28.7041, lng: 77.1025 }; // Default location (Delhi, India)
  zoom = 12; 
 
  address:any ={
    path:'First Floor, OPD F12, Max Super Speciality Hospital, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    mobile:'+91 6294595448',
    email:'nephro.santosh@gmail.com',
    maxOfficeHours:'Max Office Hours: Monday to Saturday: 09:00 am - 05:00 pm',
    officehours:'Office Hours: comming soon',
  }
  bookAppointment='https://www.maxhealthcare.in/book-an-appointment/hospital/cbb3329e-d89d-4bd2-b64d-e46e20fc018b/search/3149e74e-7efb-4c83-b6f1-0b05c4523fca'
}
