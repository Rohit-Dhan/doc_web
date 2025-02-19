import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  consultationList: string[] = [
    "Preventive Nephrology",
    "General Nephrology",
    "Acute Kidney Failure",
    "Chronic Kidney Failure",
    "Hemodialysis",
    "Peritoneal Dialysis Home Dialysis",
    "Home Hemodialysis",
    "Renal Transplantation",
    "Interventional Nephrology"
  ];
  
}
