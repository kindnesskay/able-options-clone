import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-side',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './image-side.component.html',
  styleUrl: './image-side.component.css',
})
export class ImageSideComponent {
  @Input() title!: string;
  @Input() image!: string;

  // [
  //   'assets/boy.jpg',
  //   'assets/people-with-disabilities.jpg',
  //   'assets/baking.webp',
  //   'assets/girl-on-wheelchair.webp',
  // ]; // Add your image URLs here
  // currentIndex: number = -1;
  // interval:any

  // nextSlide() {
  //   if (this.currentIndex == this.images.length - 1) {
  //     this.currentIndex = -1;
  //   }
  //   this.currentIndex++;
  // }

  // startSlideShow():void{
  //   this.interval=setInterval(()=>{
  //     this.nextSlide()
  //   },3000)
  //   this.nextSlide()

  // }
  // ngOnInit():void{
  //   this.startSlideShow()
  // }

  // ngOnDestroy(){
  //   clearInterval(this.interval)
  // }
}
