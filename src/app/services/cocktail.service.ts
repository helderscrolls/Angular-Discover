
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  getCocktail() {
    return [
      {
        name: "Mojito",
        price: "7€",
        photo: "https://zupimages.net/up/19/15/4j3c.jpeg"
      },
      {
        name: "Ginto",
        price: "10€",
        photo: "https://zupimages.net/up/19/15/oaei.jpg"
      },
      {
        name: "Vodka Orange",
        price: "5€",
        photo: "https://zupimages.net/up/19/15/jkv4.jpg"
      }
    ]
  }
}