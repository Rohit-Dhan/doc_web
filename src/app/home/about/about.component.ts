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
    title:'',
    image:'https://drrohitrungta.com/wp-content/uploads/2023/07/ROM_0149-removebg-preview.png',
    description:[
      'Welcome to Dr. Santosh Kumar’s Kidney Clinic, your trusted partner in kidney health. Dr. Santosh Kumar, a leading Senior Consultant in Nephrology and Kidney Transplant at Max Super Speciality Hospital in Lucknow, India, skilfully addresses an extensive range of kidney-related conditions and treatments.',
      `With over 15 years of esteemed experience, Dr. Kumar's expertise extends not only throughout Lucknow but also to neighbouring areas, including Poorvanchal, Bihar, and Nepal.`,
      `Renowned for his successful kidney transplant procedures, encompassing both ABO compatible and incompatible complexities, Dr. Kumar has earned a reputation as a trusted authority in kidney health. Schedule your appointment today to take the first step towards better kidney health.`
    ],
    data:[
      {
        text:'Total Experience',
        title:'15+'
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
