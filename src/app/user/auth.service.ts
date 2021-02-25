import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private router: Router) { }

  url = "/assets/login.json";
  authUser(user: User , recordar: any) : Observable<User>{
    return this.http.get<User>(this.url).pipe(map(u => {u["passwd"] = user.passwd;
    console.log(u);
    localStorage.setItem("token" , user.token);
    localStorage.setItem("login" , u.login);
    return u;}));
  }

  isAuth() : boolean{
     var token = localStorage.getItem('token')
    if(token){
      return true;
    }
    else return false;
  }

  logOut(): void{
    localStorage.removeItem("token");
    this.router.navigate(["home"]);
  }
}
