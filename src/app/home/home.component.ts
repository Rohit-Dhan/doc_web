import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  workExperienceList = {
    list:[
      "Senior Consultant, Nephrology & Renal Transplant Physician at Max Healthcare (2024 to Present)",
      "Senior Consultant Nephrologist & Renal Transplant Physician - Tender Palm Super Speciality Hospital, Lucknow (Mar 2023 – June 2024)",
      "Consultant Nephrologist & Renal Transplant Physician – Paras HMRI, Patna (Aug 2020 – March 2023)",
      "Consultant Nephrologist & Renal Transplant Physician And Associate Professor Medicine - IQ City Medical College & IQ City Narayana Multispecialty Hospital, Durgapur, WB (Jan 2018 - May 2020)",
      "Senior Resident (Nephrology) Rabindranath Tagore International Institute Of Cardiac Sciences, Unit Of Narayana Health, Kolkata (Feb 2014 – Feb 2017)",
      "Assistant Professor in Medicine SMIMS, Gangtok, Sikkim (July 2012 – Feb 2014)"
    ],
    icon:'fa-hospital',
    title:'Work Experience'
  }
  consultationList:{list:Array<string>,icon:string,title:string}  = {
    list:  [
      "Chronic Kidney Disease (CKD) Management",
      "Hypertension & Kidney Health",
      "Dialysis Services",
      "Kidney Transplant Evaluation & Follow-Up",
      "Electrolyte & Fluid Imbalance Treatment",
      "Nephrotic Syndrome & Glomerulonephritis",
      "Kidney Stone treatment",
      "Diabetic Kidney Disease",
      "Urinary/ Kidney Infections (UTI)",
      "Early Diagnosis of Kidney Diseases & Prevention of Kidney Diseases",
      "Paediatric Nephrology"
    ],
    icon:'fa-stethoscope',
    title:'Services'
  };
}
