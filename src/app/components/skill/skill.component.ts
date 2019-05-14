import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/classes/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  
  @Input() public skill: Skill;

}
