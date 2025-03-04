import { Component } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    standalone: false
})
export class AboutUsComponent {

  aboutDoctor:any ={
    name:'Dr. Santosh Kumar',
    title:'',
    image:'https://drrohitrungta.com/wp-content/uploads/2023/07/ROM_0149-removebg-preview.png',
    description:[
     `At Dr. Santosh Kumar's Kidney Clinic, we are dedicated to providing exceptional nephrology care. Our team, led by Dr. Kumar, focuses on early diagnosis, prevention, and treatment of kidney-related conditions. We utilize advanced medical technology and a patient-centered approach to improve outcomes and enhance quality of life.`
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
workExperienceList = {
  list: [
    "Dr. Santosh Kumar is currently working at Max Super Speciality Hospital, as a Senior Consultant Nephrologist & Renal Transplant Physician.",
    "Senior Consultant Nephrologist & Renal Transplant Physician - Tender Palm Super Speciality Hospital, Lucknow (Mar 2023 – June 2024).",
    "Consultant Nephrologist & Renal Transplant Physician – Paras HMRI, Patna (Aug 2020 – March 2023).",
    "Consultant Nephrologist & Renal Transplant Physician And Associate Professor Medicine - IQ City Medical College & IQ City Narayana Multispecialty Hospital, Durgapur, WB (Jan 2018 - May 2020).",
    "Senior Resident (Nephrology) Rabindranath Tagore International Institute of Cardiac Sciences, Unit of Narayana Health, Kolkata (Feb 2014 – Feb 2017).",
    "Assistant Professor in Medicine SMIMS, Gangtok, Sikkim (July 2012 – Feb 2014)."
  ]
  ,
  icon:'fa-hospital',
  title:'Work Experience'
}
 education = {
  list:[
    "MBBS from DMCH",
    "MD (Internal Medicine) from RIMS, Ranchi",
    "DNB (Nephrology) from Rabindranath Tagore International Institute of Cardiac Sciences, Kolkata",
    "MRCP (UK) (Nephrology) / ESENeph (European Speciality Examination in Nephrology)"
  ],
  icon:'fa-user-graduate',
  title:'Education & Traning'
 }
 memberShips={
  list:[
    "Indian Society of Nephrology",
    "Indian Society of Organ Transplantation",
    "International Society of Nephrology"
  ],title:'Memberships',
  icon:'fa-layer-group'
 }
 awardss={
  list: [
    "Awarded travel grant for oral presentation & poster presentation in World Congress of Nephrology 2017, Mexico City (Risk factors for new-onset diabetes mellitus after living donor kidney transplantation)",
    "Multiple paper and poster presentations at various National & International conferences",
    "More than six International & National paper publications"
  ],title:'Awards',
  icon:'fa-award'
 }
 
}
