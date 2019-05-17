import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../classes/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];
  public param_Data: CocktailService;

  constructor(private param_service: CocktailService) {
    this.param_Data = param_service;
  }

  ngOnInit() {
    this.param_service.getCocktails().subscribe(
      (paramData: Cocktail[]) => {
        this.cocktails = paramData;
      }
    )
  }
}