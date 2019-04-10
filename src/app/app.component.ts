import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class AppComponent implements OnInit {

  title = 'La Quête des Enfers';

  showMovies = true;

  constructor() { }

  ngOnInit() {
  }

}