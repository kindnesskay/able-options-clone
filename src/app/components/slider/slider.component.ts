import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  images: string[] = [
    'assets/boy.jpg',
    'assets/business-people.jpg',
    'assets/Disabled-child.webp',
    'assets/people-with-disabilities.jpg',
  ]; // Add your image URLs here
  currentIndex: number = 0;

  prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  // prevImage() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  // }

  // nextImage() {
  //   if (this.currentIndex < this.images.length - 1) {
  //     this.currentIndex++;
  //   }
  // }
}
