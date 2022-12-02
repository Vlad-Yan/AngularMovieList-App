import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MovieItem} from "../interfaces/movie-item";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal.component-dialog.html',
})

export class DialogElementsExampleDialog {

  @Output() sendMovie: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();

  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) { }

  closeDialog(movie: MovieItem) {
    this.dialogRef.close(movie);

  }


}
