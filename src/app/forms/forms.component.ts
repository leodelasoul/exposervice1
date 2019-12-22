import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,FormControl } from '@angular/forms';


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
  selectNum = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},

    {value: 6, viewValue: 6},
  ];


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
