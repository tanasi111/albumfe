import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  imageUrl: string;
  showModal: boolean;
  constructor() {
    this.showModal = false;
  }

  openLightbox(imageUrl: string) {
    this.imageUrl = imageUrl;
    this.showModal = true;
    const $body = window.document.body;
    $body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showModal = false;
    const $body = window.document.body;
    $body.style.overflow = 'visible';
  }
}
