import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() albumTitle: string;
  @Input() photo: any;

  constructor() { }

  ngOnInit() {
  }

}
