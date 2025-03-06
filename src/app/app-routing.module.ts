import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreventiveNephrologyComponent } from './components/consultsus/preventive-nephrology/preventive-nephrology.component';
import { AcuteKidneyFailureComponent } from './components/consultsus/acute-kidney-failure/acute-kidney-failure.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PatientComponent } from './components/patient/patient.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path: 'service',
    children: [
      { path: '', redirectTo: 'preventive-nephrology', pathMatch: 'full', },
      { path: 'acute-kidney-failure', component: AcuteKidneyFailureComponent },
      {path:'preventive-nephrology',component:PreventiveNephrologyComponent}
      // { path: '**', component: NotFoundComponent }, // Handle unknown service names
    ],
  },{
    path:'about',
    component:AboutUsComponent
  },{
    path:'patient',
    component:PatientComponent
  },{
    path:'gallery',
    component:GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
