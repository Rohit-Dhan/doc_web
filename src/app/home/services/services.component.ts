import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  consultationList: string[] = [
    "Kidney Transplant - ABO incompatible",
    "Kidney Transplant - ABO compatible",
    "Chronic Kidney Disease (CKD)",
    "Diabetic Kidney Disease",
    "Nephrotic Syndrome / Nephritic Syndrome",
    "Critical Care Nephrology",
    "Haemodialysis",
    "Peritoneal Dialysis",
    "Haemodiafiltration (HDF)",
    "Continuous Renal Replacement Therapy (CRRT)",
    "Sustained Low-Efficiency Dialysis (SLED)",
    "Permcath insertion",
    "Infection related to kidney / urine",
    "Kidney biopsy"
  ];
  doctorImages: string[] = [
    'assets/images/docuser1.jpg',
    'assets/images/doctor.jpg',
    'assets/images/docuser.jpg',
    'assets/images/docid.jpg'
  ];
  
}
