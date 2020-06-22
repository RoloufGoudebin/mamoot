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
}

