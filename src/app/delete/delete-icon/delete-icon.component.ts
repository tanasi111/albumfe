import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.css']
})
export class DeleteIconComponent implements OnInit {

  constructor(
    private deleteService: DeleteService
  ) { }

  ngOnInit() {
  }

  openDeleteDialog() {
    this.deleteService.openDeleteDialog();
  }

}
