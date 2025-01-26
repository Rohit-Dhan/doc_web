import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      image: 'https://artemiscardiac.com/speciality/65aa6649f0169Non%20Invasive%20Cardiology%20-%20Header%20Image.webp',
      title: 'Cardiology',
      description: 'Expert care for heart conditions with advanced diagnostics.',
    },
    {
      image: 'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/24214-nephrologist',
      title: 'Nephrology',
      description: 'Comprehensive treatment for kidney-related issues.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s',
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, and muscles.',
    },{
      image: 'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/24214-nephrologist',
      title: 'Nephrology',
      description: 'Comprehensive treatment for kidney-related issues.',
    }, {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWSegzfLiFNp99h9JpnWU7Tr9FxxEtxDHg&s',
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, and muscles.',
    }
    // Add more services as needed
  ];
  
}
