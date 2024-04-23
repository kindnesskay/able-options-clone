import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-side',
  standalone: true,
  imports: [],
  templateUrl: './image-side.component.html',
  styleUrl: './image-side.component.css'
})
export class ImageSideComponent {
@Input() image!:string;
@Input() title!:string
}
