import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  aboutDoctor:any ={
    name:'Dr. Rohit Rungta',
    title:'OUR SPECIALIST',
    image:'https://drrohitrungta.com/wp-content/uploads/2023/07/ROM_0149-removebg-preview.png',
    description:[
      'Dr. Rohit Rungta is a Senior & Leading Consultant in Nephrology & Kidney Transplant Physicians in Kolkata. His area of practice encompasses not only Kolkata, but Howrah, Hooghly, adjoining areas of Bihar, Jharkhand, Nepal and Bangladesh as well.',
      'He has an experience of more than 15 years and is currently attached to Medica Superspeciality Hospital and Mukundapur (Kidney Transplant Physician).',
      'He has presented many papers in National and International Journals as well as delivered talks in World Congress of Nephrology at Cape Town, Denmark and Australia for three consecutive years.',
      'He also takes care of teaching programs for post-doctoral trainees in Nephrology, Post Graduate trainees in Medicine and Dialysis Technicians training as well.',
      'He is a clinician par excellence, which is clearly evident in the effort he puts behind the holistic management of his patients.'
    ]
  }
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
