import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Logserve } from '../service/logserve';
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private router:Router,private logserve:Logserve) { }

  ngOnInit() {
  }

  login(username,password){
    this.logserve.signup(username,password).subscribe(  
      response => {
        alert("Registered")
  });
}
}
