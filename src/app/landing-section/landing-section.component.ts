import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.css'],

})
export class LandingSectionComponent implements OnInit {


  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {
  }

  ngOnInit() {
    this.viewportScroller.setOffset([0, 50]);
  }

  goTo(id) {
    this.router.navigate(['/form', id]);
    console.log("lol")
  }

  public onClick(elementId: string): void {

    if (elementId == "expo Vita") {
      //   var spanList = document.querySelectorAll("span");
      //   for(var i = 0; i < spanList.length-3; i++){
      //     spanList[i].style.visibility = "visible"

      //   }
      //   var landingContainer = document.getElementsByClassName('landingnav')[0]
      //   landingContainer.style.visibility = 'visible';
      //   document.getElementsByClassName('round-button-container')[0].style.visibility = 'hidden';
      // }
      // else if(elementId == "2") {
      //   document.getElementsByClassName('round-button-container')[0].style.visibility = 'visible';
      //   var spanList = document.querySelectorAll("span");
      //   for(var i = 0; i < spanList.length-3; i++){
      //     spanList[i].style.visibility = "hidden"

      //   }


      document.getElementById("buttonContainerId2").style.visibility = "visible";

      document.getElementById("buttonContainerId").style.visibility = "hidden";
    }
    else if (elementId == "2") {
      document.getElementById("buttonContainerId").style.visibility = "visible";

      document.getElementById("buttonContainerId2").style.visibility = "hidden";
    }

    else {
      this.viewportScroller.scrollToAnchor(elementId);

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

