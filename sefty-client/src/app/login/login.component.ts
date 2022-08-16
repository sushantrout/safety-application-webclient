import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin: boolean = true;
  showSignup: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  loadSignUp() {
    this.showLogin = false;
    this.showSignup = true;
  }
  loadLogin() {
    this.showSignup = false;
    this.showLogin = true;
  }
}
