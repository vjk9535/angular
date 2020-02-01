import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

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
      });
      $(function(){
          $("#t7").hide();
          $("#t6").click(function(){
                $("#t7").show();
          });
      })
  }
    
}
