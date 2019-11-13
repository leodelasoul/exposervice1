import { Component, OnInit, } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.setOffset([0,50]);
   
  }

  public onClick(elementId: string): void { 
    console.log(elementId);
    this.viewportScroller.scrollToAnchor(elementId);
}


  }
 


