import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,FormControl } from '@angular/forms';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from './material-module';



// import {MatInputModule} from '@angular/material/input';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  id: number;
  private sub: any;
  items;
  checkoutForm;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router : Router) {

    this.items = {
        Etuikleid : {
          size: "33-44",
          amount: "vorhanden"
        },
        Hosenanzug : {
          size: "XS-XL",
          amount: "vorhanden"
        },
        Kostüm: {
          size: "XS-XL",
          amount: "vorhanden"
        },
        Bluse: {
          size: "XS-XL",
          amount: "vorhanden",
          
        },
        Bluse1: {
          size: "XS-XL",
          amount: "vorhanden"
        }
    };

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      telephone: "",
    });

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  onSubmit(customerData) {
    // Process checkout data here

    this.checkoutForm.reset();
  }


  // this.items = this.bekleidungsFormService.getItems();  

  ngOnInit() {
    

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });


  }
}
