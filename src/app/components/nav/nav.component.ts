import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(
    private router:Router
  ){}
   consultationList :Array<{name:string,routerLink:string}> = [
    { name: "Preventive Nephrology", routerLink: "preventive-nephrology" },
    { name: "Acute Kidney Failure", routerLink: "acute-kidney-failure" },
    { name: "General Nephrology", routerLink: "general-nephrology" },
    { name: "Chronic Kidney Failure", routerLink: "chronic-kidney-failure" },
    { name: "Hemodialysis", routerLink: "hemodialysis" },
    { name: "Peritoneal Dialysis Home Dialysis", routerLink: "peritoneal-dialysis-home-dialysis" },
    { name: "Home Hemodialysis", routerLink: "home-hemodialysis" },
    { name: "Renal Transplantation", routerLink: "renal-transplantation" },
    { name: "Interventional Nephrology", routerLink: "interventional-nephrology" }
  ];
  navigateToService(link:string){
    this.router.navigate(['service',link])
  }
  navigate(link:string){
    this.router.navigate([link])
  }
}
