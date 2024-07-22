import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public loginUrl="http://172.16.2.212:1001/login";
  public http = inject(HttpClient)


  // login(email: string, password: string): Observable<{ token: any }> {
  //  return "";
  //   // return this.http.post<{ token: string }>('http://172.16.2.212:1001/login', { email, password });
  // }

  public login(email: string, password: string): Observable< any> {
    return this.http.post(`${this.loginUrl}`, { email, password })
  }
}
