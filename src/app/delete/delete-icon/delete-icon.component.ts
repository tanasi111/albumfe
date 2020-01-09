import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.css']
})
export class DeleteIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDeleteDialog() {
    alert('open delete dialog');
  }

}
