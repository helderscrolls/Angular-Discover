import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user-service.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isValidFormSubmitted = false;
  user = new User();
  
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
     this.isValidFormSubmitted = false;
     if (form.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = form.value;
     this.userService.createUser(this.user);
     this.user = new User();
     form.resetForm();
  }
} 