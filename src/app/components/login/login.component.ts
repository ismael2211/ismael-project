import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl : './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService , private router : Router) { }
  recordar = false;
  user: User = {login:"" , token: "kughdfkuhfu7852" , passwd:""};
  ngOnInit(): void {
  }

  login(){
this.auth.authUser(this.user, this.recordar).subscribe(
  u=>{
  console.log(u);
  this.user = u;
this.router.navigate(["boxeadores"])
},
e => console.log(e)
);
  }

  }
