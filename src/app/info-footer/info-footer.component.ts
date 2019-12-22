import {Component} from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title Define Main content
 */
@Component({
  selector: 'info-footer',
  templateUrl: 'info-footer.component.html',
  styleUrls: ['info-footer.component.css'],
})


export class InfofooterComponent {

  constructor(
    private router : Router) { 
    }

}