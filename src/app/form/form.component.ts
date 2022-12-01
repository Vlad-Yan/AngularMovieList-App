import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieItem} from "../interfaces/movie-item";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit
{
  @Output() onSubmit: EventEmitter<MovieItem> = new EventEmitter<MovieItem>();

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, [ Validators.required]),
      genre: new FormControl(null, [ Validators.required]),
      url: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)])
    });
  }
  submit() {
    if (this.form.valid) {
      console.log("Form: ", this.form);
      const formData = {...this.form.value}
      console.log("Form Data:", formData)
      this.onSubmit.emit(this.form.value)
      this.form.reset()
    }
  }
}

