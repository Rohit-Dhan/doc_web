import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRouterActiveClassDirective } from './custom-router-active-class/custom-router-active-class.directive';




@NgModule({
  declarations: [CustomRouterActiveClassDirective],
  imports: [
    CommonModule
  ],
  exports:[CustomRouterActiveClassDirective]
})
export class DirectiveModule { }
