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

  title = 'Atoze';

  showMovies = true;

  constructor() { }

  ngOnInit() {
  }

}