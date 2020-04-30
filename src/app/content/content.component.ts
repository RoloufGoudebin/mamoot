import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from "jquery";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('../assets/js/main.js')
    $("main-droite").click(function () {
      $(this).hide("slide", { direction: "left" }, 1000);
    });

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  clickOnService() {
    var bg = document.getElementById("mainGauche");
    bg.style.backgroundImage = '';
    var txtService = document.getElementById("service1");
    txtService.classList.remove("d-none");
    txtService.classList.add("animated fadeIn");
  }
}

