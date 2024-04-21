import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';
import { VideoComponent } from '../components/video/video.component';

@Component({
  selector: 'app-ndis',
  standalone: true,
  imports: [ImageSideComponent,VideoComponent],
  templateUrl: './ndis.component.html',
  styleUrl: './ndis.component.css'
})
export class NdisComponent {

}
