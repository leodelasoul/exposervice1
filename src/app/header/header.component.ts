import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject,Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';


import { DOCUMENT } from '@angular/common';
import { WINDOW } from ".././services/window.service";
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  //@ViewChild('sidenav',{static: false})
  @ViewChild('sidenav',{static:false}) input; 
  private isOn = true;

  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private router : Router,
    private elementRef: ElementRef) { }


  scrollTop = 0;
  hideNav = false;
  public navIsFixed: boolean = false;
  ngOnInit() {
    this.viewportScroller.setOffset([0, 50]);
    // let test = new WindowRef().nativeWindow // old js this reference, if used on window object
    // console.log(test)

  }




  public navTo(navItem: string): void {
    
    console.log(navItem);
    if(navItem == "home"){
      this.router.navigate(['/']);
    }
    else if(navItem == "pers"){
      this.router.navigate(['/form/1'])
    }
    else if(navItem == "bekleid"){
      this.router.navigate(['/form/2'])
    }
    else if(navItem == "bewerb"){
      this.router.navigate(['/form/3'])
      
    }
    else if(navItem == "datenschutz"){
      this.router.navigate(['/datenschutz'])
    }
    
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

    
    let scrollLevel = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(scrollLevel)
    if (scrollLevel < 100) {

      this.isOn = true;
    } else if(scrollLevel > 200) {
      // document.querySelector("nav").style.cssText = "display:initial"
      this.isOn = false;
      // document.querySelector("nav").style.cssText = "position:fixed"

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





