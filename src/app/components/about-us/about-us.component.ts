import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

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
    ]}
awards:Array<any>=[
  {
    image:'https://drrohitrungta.com/wp-content/uploads/2023/06/member1.png',
    title:'Dr. Rohit Rungta is a Senior & Leading Consultant in Kolkata. '
  },{
    image:'https://drrohitrungta.com/wp-content/uploads/2023/06/member1.png',
    title:'Dr. Rohit Rungta is a Senior & Leading Consultant in Kolkata. '
  },{
    image:'https://drrohitrungta.com/wp-content/uploads/2023/06/member1.png',
    title:'Dr. Rohit Rungta is a Senior & Leading Consultant in Kolkata. '
  }
]
membersAndCertifications:Array<string>=[
  'https://drrohitrungta.com/wp-content/uploads/2023/07/ISN-RGB-pos_hori-baseline-PNG.png',
  'https://drrohitrungta.com/wp-content/uploads/2023/07/banner2_1200x400.jpg',
  'https://drrohitrungta.com/wp-content/uploads/2023/07/download-1.jpeg',
  'https://drrohitrungta.com/wp-content/uploads/2023/07/download.jpeg',
]
workExperience:Array<any>=[
  {
    date:'November 2018 ',
    title:'Present: Medica Superspeciality Hospital, Mukundapur, Kolkata',
    image:'https://drrohitrungta.com/wp-content/uploads/2023/07/Medica-Superspeciality-Hospital-1024x682.jpg'
  }, {
    date:'March 2017 – November 2018',
    title:'IQ City Narayana Multispeciality Hospital, Durgapur',
    image:'https://drrohitrungta.com/wp-content/uploads/2023/07/IQ-City-Durgapur-1024x682.jpg'
  }, {
    date:'',
    title:'',
    image:''
  }, {
    date:'',
    title:'',
    image:''
  }
]
}
