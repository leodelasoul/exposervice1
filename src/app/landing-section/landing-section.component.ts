import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.css']
})
export class LandingSectionComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.viewportScroller.setOffset([0, 50]);
    let test = new WindowRef().nativeWindow // old js this reference, if used on window object
    console.log(test)

  }
  public onClick(elementId: string): void {

    this.viewportScroller.scrollToAnchor(elementId);
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

