import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  previousImageUrl: string;
  imageUrl: string;
  imageId: number;
  nextImageUrl: string;

  showLightbox: boolean;
  images: any;

  constructor() {
    this.showLightbox = false;
  }

  openLightbox(imageUrl: string, imageId: number) {
    this.imageUrl = imageUrl;
    this.imageId = imageId;
    this.showLightbox = true;
    const $body = window.document.body;
    $body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showLightbox = false;
    const $body = window.document.body;
    $body.style.overflow = 'visible';
  }

  changeSlide(count: number) {
    this.imageId = count + this.imageId;
    this.imageUrl = `https://i.picsum.photos/id/${this.imageId}/640/480.jpg`;
  }

}
