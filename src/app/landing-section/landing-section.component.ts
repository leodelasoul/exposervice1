import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TEXTS } from './landing-texts';


@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.css'],

})


export class LandingSectionComponent implements OnInit {
  texts = TEXTS;
  id: number;
  show : boolean;

  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {
      this.id = 0;    
      this.show = false;  
  }

  ngOnInit() {
    this.viewportScroller.setOffset([0, 50]);
  }

  public goTo(id : number) : void {
    if(id == 4 ){
      this.show = true;

      document.getElementById("buttonContainerId2").style.visibility = "visible";

      document.getElementById("buttonContainerId").style.visibility = "hidden";

    }
    
    else{
      this.router.navigate(['/form', id]);

    }
  }

  public onClick(elementId: number): void {

    this.id = elementId;

    if (elementId == 0) {
      this.show = false;

      document.getElementById("buttonContainerId").style.visibility = "visible";

      document.getElementById("buttonContainerId2").style.visibility = "hidden";
    }

    else {
      this.show = true;
    }


  }
  


}
function _window(): any {
  return window
}


@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }
}

