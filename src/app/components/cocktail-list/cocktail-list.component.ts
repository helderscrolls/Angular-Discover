import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public cocktails = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }

}