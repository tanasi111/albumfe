import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  previousImageUrl: string;
  imageUrl: string;
  imageId: number;
  nextImageUrl: string;

  showModal: boolean;
  images: any;

  constructor() {
    this.showModal = false;
  }

  openLightbox(imageUrl: string, imageId: number) {
    this.imageUrl = imageUrl;
    this.imageId = imageId;
    this.showModal = true;
    const $body = window.document.body;
    $body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showModal = false;
    const $body = window.document.body;
    $body.style.overflow = 'visible';
  }

  changeSlide(count: number) {
    console.log(count);
    console.log(this.imageId);
    this.imageId = count + this.imageId;
    this.imageUrl = `https://i.picsum.photos/id/${this.imageId}/640/480.jpg`;
    console.log(this.imageUrl);
  }

}
