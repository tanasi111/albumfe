import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  albums: any;
  fullAlbums: any;
  photos: any;
  firstPosition: number;
  lastPosition: number;

  constructor() {
    this.firstPosition = 0;
    this.lastPosition = 7;
  }

  getAlbums(albums: any) {

    this.fullAlbums = albums;

    if (this.firstPosition === 0 && this.fullAlbums.length >= 7) {
      this.albums = this.fullAlbums.slice(this.firstPosition, this.lastPosition);
      this.firstPosition = this.lastPosition;
      this.lastPosition = this.firstPosition + 7;
    } else if (this.firstPosition === 0 && this.fullAlbums.length < 7) {
      this.albums = this.fullAlbums;
    }

  }

  loadMoreAlbums() {

    if (this.fullAlbums.length >= this.lastPosition) {
      this.albums.push(...this.fullAlbums.slice(this.firstPosition, this.lastPosition));
      this.firstPosition = this.lastPosition;
      this.lastPosition = this.firstPosition + 7;
    } else if (this.fullAlbums.length > this.firstPosition) {
      this.albums.push(...this.fullAlbums.slice(this.firstPosition, this.fullAlbums.length));
      this.firstPosition = this.fullAlbums.length;
    } else {
      console.log('no more data');
    }

  }
}
