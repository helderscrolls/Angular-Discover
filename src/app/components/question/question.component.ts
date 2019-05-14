import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../../classes/question.model'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() public answer: boolean;
  @Input() public question: string;
  @Input() public id: string;
  public checked: boolean;
  public isAnswer: boolean;
  @Output() public getAnswer: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }



  sendAnswer(id: string, value: boolean): void {
    this.getAnswer.emit(`${id}-${value}`);
    this.checked = true;
    if (value === this.answer) {
      this.isAnswer = true;
    } else {
      this.isAnswer = false;
    }
  }


}