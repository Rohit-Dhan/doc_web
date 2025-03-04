import { Component } from '@angular/core';

@Component({
    selector: 'app-preventive-nephrology',
    templateUrl: './preventive-nephrology.component.html',
    styleUrls: ['./preventive-nephrology.component.scss'],
    standalone: false
})
export class PreventiveNephrologyComponent {
  data = {
    title: 'Preventive Nephrology',
    icon: 'fas fa-stethoscope',
    description: '',
    aboutServices: [
      {
        image: 'https://drrohitrungta.com/wp-content/uploads/2023/07/42478-2048x1783-1-1024x892.jpg',
        title: 'Normal Function of Kidney',
        description: [
          "Preventive Nephrology Aims To Keep Kidneys Healthy By Identifying And Managing Risk Factors For Kidney Disease",
          "Screening High-Risk Groups (E.G. Those With Diabetes Or High Blood Pressure) Is Done To Catch Early Signs Of Kidney Disease And Intervene To Slow Its Progression.",
          "Preventive Nephrology Can Improve Quality Of Life For Those With Kidney Disease And Reduce Healthcare Costs Associated With Managing The Condition",
          "Educating Patients On Healthy Lifestyle Choices, Such As A Healthy Diet, Regular Exercise, And Not Smoking, Can Reduce The Burden Of Risk Factors On Kidney Health",
          "Monitoring And Managing Underlying Medical Conditions That Contribute To Kidney Disease Can Help Reduce The Risk Of Kidney Disease",
          "Identifying And Managing Medication Side Effects That Can Harm The Kidneys Is Important In Preventing Kidney Damage",
        ]
      },
    ],
    dos:{
      title:'Symptoms Of Preventive Nephrology',
      list: [
        "It does not have specific symptoms as its goal is to prevent symptoms from occurring.",
        "People who may benefit from preventive nephrology include those with a family history of kidney disease, who are overweight or obese, have high blood pressure or diabetes, or take medications that may harm kidney function.",
        "High-risk individuals can benefit from screening and interventions provided by preventive nephrology to help reduce their risk of developing kidney disease."
      ]
    },
    donts: {
      title:'',
      list:[
        "Don't take over-the-counter pain medications or supplements without consulting your doctor.",
        "Avoid consuming excessive amounts of alcohol or caffeine.",
        "Don't smoke or use tobacco products."
      ]
    }
  }
}
