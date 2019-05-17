
import { Injectable } from '@angular/core';
import { Cocktail } from '../classes/cocktail.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }


  public getCocktails(): Observable<Cocktail[]> {
    const obs1: Observable<any> = this.service.get("../assets/cocktails.json");
    const treatment = (param_data: any) => {
      let array: Cocktail[] = [];
      let treatment = null;

      for (let j = 0; j < param_data.length; j++) {
        treatment = param_data[j];
        array.push(treatment);
      }

      return array;
    };

    return obs1.pipe(map(treatment));
  }
}