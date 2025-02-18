import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  consultationList: string[] = [
    'Prevention Of Kidney Diseases',
    'Early Diagnosis Of Kidney Diseases',
    'Diabetes Related Kidney Disease',
    'Diagnosis And Treatment Of Hypertension (High Blood Pressure)',
    'Urinary Infections',
    'Kidney Stones',
    'Acute And Chronic Kidney Disease',
    'Hemodialysis And Peritoneal Dialysis',
    'Management Of Dialysis Fistula Problems',
    'Kidney Transplantation',
    'Lupus Nephritis',
    'Glomerulonephritis',
    'Interventional Nephrology',
    'Paediatric Nephrology'
  ];
  
}
