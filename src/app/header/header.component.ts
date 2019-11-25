import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject,Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { DOCUMENT } from '@angular/common';
import { WINDOW } from ".././services/window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  //@ViewChild('sidenav',{static: false})
  @ViewChild('sidenav',{static:false}) input; 
  

  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private elementRef: ElementRef) { }


  scrollTop = 0;
  hideNav = false;
  public navIsFixed: boolean = false;
  ngOnInit() {
    this.viewportScroller.setOffset([0, 50]);
    // let test = new WindowRef().nativeWindow // old js this reference, if used on window object
    // console.log(test)

  }




  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number < 700) {
      //hide that shit
      // this.elementRef.nativeElement //whole component 
      document.querySelector("nav").style.cssText = "display:none"
    } else {
      document.querySelector("nav").style.cssText = "display:initial"
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





