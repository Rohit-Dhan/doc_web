import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent {

  aboutDoctor:any ={
    name:'Dr. Santosh Kumar',
    title:'OUR SPECIALIST',
    image:'https://drrohitrungta.com/wp-content/uploads/2023/07/ROM_0149-removebg-preview.png',
    description:[
      'Dr. Santosh Kumar (Senior Consultant - Nephrology & Renal Transplant Physician) - Nephrology, Kidney Transplant',
      'Senior Consultant Nephrologist & Renal Transplant Physician - Tender Palm Super Speciality Hospital, Lucknow (Mar 2023 – June 2024)',
      'Consultant Nephrologist & Renal Transplant Physician And Associate Professor Medicine - IQ City Medical College & IQ City Narayana Multispecialty Hospital, Durgapur, WB (Jan 2018 - May 2020)',
      'He is a clinician par excellence, which is clearly evident in the effort he puts behind the holistic management of his patients.'
    ],
    data:[
      {
        text:'Total Experience',
        title:'10+'
      },{
        text:'Patients Treated',
        title:'10000+'
      },{
        text:'Kidney Biopsy',
        title:'1000+'
      },{
        text:'Kidney Biopsy',
        title:'1000+'
      }
    ]
  }
}
