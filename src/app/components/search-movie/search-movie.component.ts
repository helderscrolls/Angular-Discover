import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { isRequiredValidator } from "../../validators/isRequired.validators";
import { rangeDateValidator } from 'src/app/validators/rangeDate.validators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit {
  public minimumYear: number = 1900;
  public maximumYear: number = 2019;
  types = [];
  fiches = [];

  // Declare all controls with validation rules
  moviesListForm = this.fb.group({
    loginOrTitle: this.fb.group({
      login: [''],
      title: ['']
    }, { validators: isRequiredValidator("login", "title") }),
    releaseDate: ['', rangeDateValidator(this.minimumYear, this.maximumYear)],
    types: [''],
    fiche : new FormControl([''], [Validators.required]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.types = this.getTypes();
    this.fiches = this.getFiches();
  }

  getTypes() {
    this.types = [
      { id: '1', type: 'Film' },
      { id: '2', type: 'Séries' },
      { id: '3', type: 'Épisode' },
    ];
    this.moviesListForm.patchValue({
      types: this.types[1]
    });
    return this.types;
  }

  getFiches() {
    this.fiches = ['Complète', 'Courte'];
    this.moviesListForm.patchValue({
      fiche: this.fiches[0]
    })
    return this.fiches;
  }

  onSubmit() {
    // Get form value as JSON object
    console.log(JSON.stringify(this.moviesListForm.value));
  }
}

