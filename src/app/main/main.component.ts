import { Component,Renderer2, ViewChild, Directive, OnInit, Injectable, ElementRef, HostListener } from '@angular/core';


/**
 * @title Define Main content
 */

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  pic: string;
}



@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
})
export class MainContentComponent implements OnInit {
  // public lol = require("assets/personal.jpg");


  tiles: Tile[] = [
    { text: 'Personalanfrage', cols: 1, rows: 1, color: '#e0a819', pic: "none" },
    { text: 'Bewerbung als Host/-ess', cols: 1, rows: 1, color: '#e0a819', pic: "none" },
    { text: 'Kostümverleih', cols: 1, rows: 1, color: '#e0a819', pic: "none" },

  ];
  ngOnInit() {
    
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // console.log(event);
  }

  // public onChangeTilePic(tilename: string): void {

  //   if (tilename == "Personalanfrage") {
  //     console.log("1")
  //     this.tiles[3].pic =  "asssets/personal.jpg"
  //   }
  //   else if (tilename == "Bewerbung als Host/-ess") {
  //     console.log("2")
  //     this.tiles[3].pic = "asssets/bewerben.jpg"
  //   }
  //   else if (tilename == "Kostümverleih") {
  //     console.log("3")
  //     this.tiles[3].pic = "asssets/kostuem.jpg"
  //   }
  //   else {
  //     this.tiles[3].pic = "none"

  //   }
  // }

}

