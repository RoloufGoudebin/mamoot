import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { 
    function onClickMe(){
      var element = document.getElementById("etendre");
      element.classList.remove("d-none");
    }
  }

  ngOnInit(): void {
    function onClickMe(){
      var element = document.getElementById("etendre");
      element.classList.remove("d-none");
    }
  }

}
