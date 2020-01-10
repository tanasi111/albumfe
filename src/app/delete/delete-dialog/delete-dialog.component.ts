import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private deleteService: DeleteService
  ) { }

  ngOnInit() {
  }

  closeDeleteDialog() {
    this.deleteService.closeDeleteDialog();
  }

  delete() {
    this.deleteService.delete();
    this.deleteService.closeDeleteDialog();
  }

}
