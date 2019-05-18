import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public Cocktails = []

  constructor(public _CocktailService: CocktailService) { }

  ngOnInit() {
    this.Cocktails = this._CocktailService.getCocktail()
  }

}
