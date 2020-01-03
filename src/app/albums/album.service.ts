import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getUserAlbums(userId: string) {
    console.log('userId: ' + userId);
    return this.http.get(`${this.API_URL}/albums?userId=${userId}`);
  }
}
