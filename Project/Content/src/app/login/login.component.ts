import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
        
      $("#t1").click(function(){
          $(".card").animate({
              width: 60
          });
          $("#t3").animate({
              left:20
          });
          $("#t1,ul").hide();
          $("#t3").show();
      });
      });
      $(function(){
          $("#t3").click(function(){
          $(".card").animate({
              width: 260
          });
          $("#t1").animate({
              right:260
          });
          $("#t1,ul").show();
          $("#t3").hide();
      });
      })
  }

}
