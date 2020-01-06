import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  imageUrl = 'https://i.picsum.photos/id/456/640/480.jpg';
  constructor() { }

  ngOnInit() {
  }

}
