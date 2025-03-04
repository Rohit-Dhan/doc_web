import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss'],
    standalone: false
})
export class HeadingComponent {
@Input() icon:string = '';
@Input() title:string =''
}
