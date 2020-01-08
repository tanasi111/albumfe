import { Component, OnInit, HostListener } from '@angular/core';
import { AlbumService } from './album.service';
import { LayoutService } from '../shared/layout/layout.service';

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
    albumService: AlbumService,
    private layoutService: LayoutService
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

  loadMore() {
    this.albums.push(...this.albums);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // at the bottom of the page
      this.albums.push(...this.albums);
    }
  }

}
