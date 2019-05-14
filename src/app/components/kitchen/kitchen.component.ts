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

  startCooking() {
    this.cook = true;
  }
}
