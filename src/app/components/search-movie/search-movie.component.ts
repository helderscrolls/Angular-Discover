import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { isRequiredValidator } from "../../services/isRequired.validators";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent {
  minNum = 1900;
  maxNum = 2019;

  // Declare all controls with validation rules
  moviesListForm = this.fb.group({
    loginOrTitle: this.fb.group({
      login: [''],
      title: ['']
    },{ validators: isRequiredValidator("login", "title") }),
    releaseDate: ['', [Validators.required, Validators.min(this.minNum), Validators.max(this.maxNum)]],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // Get form value as JSON object
    console.log('moviesForm submitted : ', this.moviesListForm.value);
  }
}

