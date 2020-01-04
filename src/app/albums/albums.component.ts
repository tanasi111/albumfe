import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any;
  user: any;
  lastName: string;

  constructor(
    albumService: AlbumService
  ) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    const userId: string = this.user[0].id;

    console.log(userId);

    this.lastName = this.user[0].name.split(' ').pop();
    albumService.getUserAlbums(userId)
      .subscribe(
        data => {
          this.albums = data;
        },
        err => console.log(err)
      );
  }

  ngOnInit() {
  }

}
