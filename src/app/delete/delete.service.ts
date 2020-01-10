import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  showDeleteDialog: boolean;

  constructor() {
    this.showDeleteDialog = false;
  }

  openDeleteDialog() {
    this.showDeleteDialog = true;
    const $body = window.document.body;
    $body.style.overflow = 'hidden';
  }

  closeDeleteDialog() {
    this.showDeleteDialog = false;
    const $body = window.document.body;
    $body.style.overflow = 'visible';
  }

}
