import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  consultationList:Array<any>=[
    {
      name:'acute-kidney-failure',
      title:'Acute Kidney Failure',
      icon:'far fa-hand-point-right',
      description:'Acute kidney failure, also known as acute kidney injury (AKI), is a sudden and rapid loss of kidney function. This condition can be caused by a variety of factors, such as dehydration, medication toxicity, infections, or damage to the kidneys',
      aboutServices:[
        {
          image:'https://drrohitrungta.com/wp-content/uploads/2023/07/4.jpg',
          title:'Symptoms Of Acute Kidney Failure Can Include',
          description:[
            "Decreased Urine Output",
            "Swelling In The Legs, Ankles, Or Feet",
            "Fatigue And Weakness",
            "Nausea And Vomiting",
            "Confusion Or Difficulty Concentrating",
            "Chest Pain Or Pressure",
            "Shortness Of Breath"
          ]
        }, {
          image:'https://drrohitrungta.com/wp-content/uploads/2023/07/1.jpg',
          title:'Common Causes Of Acute Kidney Failure Include',
          description:[
            "Dehydration",
            "Blood loss or low blood pressure",
            "Medications that damage the kidneys, such as certain antibiotics or painkillers",
            "Infections, such as sepsis or urinary tract infections",
            "Kidney damage from surgery or radiation therapy"
          ]
        },
      ],
      dos:[
        "Stay hydrated by drinking enough water.",
        "Manage underlying health conditions such as hypertension and diabetes.",
        "Follow a healthy diet and lifestyle.",
        "Take medications only as prescribed by your doctor.",
        "Seek medical attention promptly if you experience any symptoms of acute kidney failure."
      ],
      donts:[
        "Don't take over-the-counter pain medications or supplements without consulting your doctor.",
        "Avoid consuming excessive amounts of alcohol or caffeine.",
        "Don't smoke or use tobacco products."
      ] 
    }
  ]
}
