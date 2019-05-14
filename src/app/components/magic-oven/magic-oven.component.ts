import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css']
})
export class MagicOvenComponent {
  @Output()
  getCookies: EventEmitter<any> = new EventEmitter();

  sendCookies() {
    this.getCookies.emit(this.numberOfCookies);
  }

  @Input()
  numberOfCookies: number

  @Input()
  flour: number

  @Input()
  salt: number

  @Input()
  sugar: number

  @Input()
  egg: number

  @Input()
  startCooking: boolean
}
