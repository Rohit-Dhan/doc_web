import { Component, ElementRef, ViewChild,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() details:{list:Array<string>,icon:string,title:string} ={
    list:[],
    icon:'fa-hospital',
    title:'Default heading'
  };

  
}
