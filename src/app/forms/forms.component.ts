import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})



export class FormsComponent implements OnInit {
  count: number;
  isFilled: boolean;
  id: number;
  private sub: any;
  items;
  checkoutForm;
  selectNum = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 },

    { value: 6, viewValue: 6 },
  ];
  bekleiForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    postCode: new FormControl('', Validators.maxLength(5)),
    kleidsize: new FormControl(''),
    kleidamount: new FormControl(''),
    blusesize: new FormControl(''),
    bluseamount: new FormControl(''),
    hosesize: new FormControl(''),
    hoseamount: new FormControl(''),
    bluse1size: new FormControl(''),
    bluse1amount: new FormControl(''),
    kostumsize: new FormControl(''),
    kostumamount: new FormControl('')


  });

  personForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  })

  bewerbForm = new FormGroup({


  });

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private _messageService: MessageService,
    @Inject(DOCUMENT) private document: Document, ) {

    this.isFilled = false;
    this.count = 0;
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



  onChange(event) {
    var objectToLoop = new Object(this.bekleiForm.value);
    var count = 0

    for (var key in objectToLoop) {
      if (objectToLoop[key] !== "") {
        this.count++;

      }
      else if (this.count >= 5) {
        this.isFilled = true;
      }
    }

  }

  onSubmit() {
    this.count = 0;
    // console.warn(this.bekleiForm.value);

    var data = [];
    if (this.router.url == "/form/1") {

      data[0] = "Personalanfrage"
      data[1] = this.personForm.value
      this._messageService.sendMailSumbit(data)
      this.personForm.reset();


    }
    else if (this.router.url == "/form/2") {
      data[0] = "Bekleidungsanfrage"
      data[1] = this.bekleiForm.value
      console.log(this.bekleiForm.value);

      this._messageService.sendMailSumbit(data)

      this.bekleiForm.reset();

    }
    else if (this.router.url == "/form/3") {
      data[0] = "Bewerbung"
      data[1] = this.personForm.value
      this._messageService.sendMailSumbit(data)
      this.bewerbForm.reset();

    }

  }



  // this.items = this.bekleidungsFormService.getItems();  

  ngOnInit() {


    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });


  }
}
