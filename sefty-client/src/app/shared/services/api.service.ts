import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  common_url: string = environment.api_url;

  constructor(private http: HttpClient) { }

  userAuthentication(user: User) {
    let login_url = this.common_url + "/user/login";
    return this.http.post<any>(login_url, user);
  }
}
