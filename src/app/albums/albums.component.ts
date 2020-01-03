import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(
    albumService: AlbumService
  ) {
    // const user: any = window.localStorage.getItem('user');
    // const userId = user.userID;
  }

  ngOnInit() {
  }

}
