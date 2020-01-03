import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any;

  constructor(
    albumService: AlbumService
  ) {
    const user: any = JSON.parse(window.localStorage.getItem('user'));
    const userId: string = user[0].id;
    albumService.getUserAlbums(userId)
      .subscribe(
        data => {
          console.log(data);
        },
        err => console.log(err)
      );
  }

  ngOnInit() {
  }

}
