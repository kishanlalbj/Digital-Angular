import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
    selector: 'log-in',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
  })

export class LoginComponent{
username:string = '';
password:string = '';
message:string = '';

user:Object= {
  username: '',
  password:''
};
isLoggedIn:boolean = false;

constructor(private router:Router,private userservice:UserService){}

login(e){
  console.log(this.username);
  console.log(this.password);
var key =btoa( btoa(this.username) + '??' + btoa(this.password)) ;
document.cookie = "sessionId="+key;
console.log(key);

  if(this.username == "kishanlalbj" && this.password == "password") {
    this.router.navigateByUrl('/home');    
    this.userservice.setUserLoggedIn();
  }
  else {
    this.message = "Invalid credentials";
  }
  
}
}
