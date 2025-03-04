import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-base-image',
    templateUrl: './base-image.component.html',
    styleUrls: ['./base-image.component.scss'],
    standalone: false
})
export class BaseImageComponent {
@Input() title:string = '';
@Input() desc:string = '';
}
