import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  flourQuantity: number;
  saltQuantity: number;
  sugarQuantity: number;
  eggQuantity: number;
  numberOfCookies: number;

  cook = false;

  cookiesCooked: number = 0;
  
  startCooking() {
    this.cook = true;
  }

  onGetCookies($event) {
    this.cookiesCooked = + $event;
  }
}
