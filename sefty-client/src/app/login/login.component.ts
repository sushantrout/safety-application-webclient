import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin: boolean = true;
  showSignup: boolean = false;

  user: User = new User();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  loadSignUp() {
    this.showLogin = false;
    this.showSignup = true;
  }
  loadLogin() {
    this.showSignup = false;
    this.showLogin = true;
    this.user = new User();
  }

  userLogin() {
    if (this.user.username && this.user.password) {
      console.log(this.user);
      this.apiService.userAuthentication(this.user).subscribe
        ((res: any) => {
          console.log(res);
        },
          (err: any) => {
            console.log(err);
          })
    } else {
      alert("Please enter the credentials !")
    }
  }
}
