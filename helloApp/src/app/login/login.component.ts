import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  validate_login(username,password){

    if(username=="admin" && password =="admin123")
    {
     this.router.navigate(['/home']);
    }else{
     alert("verify login credentials");
     alert(username.value+" "+password.value);
     this.router.navigate(['/login']);
    }
 }
 
}
