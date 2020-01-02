import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  showDetails: boolean;
  isChecked: boolean;
  items;
  checkoutForm;

  selectHost = [
    { value: 1, viewValue: "Host" },
    { value: 2, viewValue: "Hostess" },

  ];

  selectNum = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 },

    { value: 6, viewValue: 6 },
  ];
  bekleiForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    postCode: new FormControl(null, Validators.maxLength(5)),
    kleidsize: new FormControl(null),
    kleidamount: new FormControl(null),
    blusesize: new FormControl(null),
    bluseamount: new FormControl(null),
    hosesize: new FormControl(null),
    hoseamount: new FormControl(null),
    bluse1size: new FormControl(null),
    bluse1amount: new FormControl(null),
    kostumsize: new FormControl(null),
    kostumamount: new FormControl(null)


  });

  personForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    firmName: new FormControl(null),
    telefon: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),

    veranstName: new FormControl(null, Validators.required),
    vonDatum: new FormControl(null, Validators.required),
    bisDatum: new FormControl(null, Validators.required),
    veranstOrt: new FormControl(null, Validators.required),
    besonderes: new FormControl(null),
    host: new FormControl(null, Validators.required),


    kleidsize: new FormControl(null),
    kleidamount: new FormControl(null),
    blusesize: new FormControl(null),
    bluseamount: new FormControl(null),
    hosesize: new FormControl(null),
    hoseamount: new FormControl(null),
    bluse1size: new FormControl(null),
    bluse1amount: new FormControl(null),
    kostumsize: new FormControl(null),
    kostumamount: new FormControl(null)


  })

  bewerbForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null),
    telefon: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    houseNr: new FormControl(null),
    street: new FormControl(null),
    ort: new FormControl(null),
    plz: new FormControl(null),
    Studium: new FormControl(null),
    Semester: new FormControl(null),
    Abschlussjahr: new FormControl(null),
    führerSchein: new FormControl(null),
    pkw: new FormControl(null),
    gesundheitszeugnis: new FormControl(null),
    englisch: new FormControl(null),
    franz: new FormControl(null),
    spanisch: new FormControl(null),
    tuerkisch: new FormControl(null),
    persisch: new FormControl(null),
    sonstiges: new FormControl(null),
    agenturen: new FormControl(null),

    promotion: new FormControl(null),
    agenturundstadt: new FormControl(null),
    monate: new FormControl(null),
    jahr: new FormControl(null),

    teamleitung: new FormControl(null),
    wieerfahren: new FormControl(null),
    sonstigeangaben: new FormControl(null),
    konfektion: new FormControl(null),
    schuhgröße: new FormControl(null),
    lohnsteuer: new FormControl(null),
    gewerbenummer: new FormControl(null),





  });

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private _messageService: MessageService,
    @Inject(DOCUMENT) private document: Document,
    public dialog: MatDialog) {
    this.showDetails = false;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAfterSubmit, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  onChange(event) {
    var objectToLoop = new Object(event.value);
    var count = 0

    for (var key in objectToLoop) {
      if (objectToLoop[key] !== null) {
        this.count++;

      }
      else if (this.count >= 4) {
        this.isFilled = true;
      }
    }


  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });

      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    this.count = 0;
    // console.warn(this.bekleiForm.value);

    var data = [];
    if (this.router.url == "/form/1") {

      if (this.personForm.valid) {
        data[0] = "Personalanfrage"
        data[1] = this.personForm.value
        this._messageService.sendMailSumbit(data)
        this.personForm.reset();
        this.isFilled = false;
        this.showDetails = false;
        this.openDialog();
      }
      else {
        this.validateAllFormFields(this.personForm);

      }

    }
    else if (this.router.url == "/form/2") {
      if (this.bekleiForm.valid) {
        data[0] = "Bekleidungsanfrage"
        data[1] = this.bekleiForm.value
        this._messageService.sendMailSumbit(data)
        this.isFilled = false;
        this.bekleiForm.reset();
        this.isFilled = false;
        this.showDetails = false;
        this.openDialog();
      }
      else {
        this.validateAllFormFields(this.bekleiForm);

      }


    }
    else if (this.router.url == "/form/3") {
      data[0] = "Bewerbung"
      data[1] = this.bewerbForm.value
      this._messageService.sendMailSumbit(data)
      this.bewerbForm.reset();
      this.openDialog();


    }

  }

  onChecked(event) {

    this.showDetails = true;
    if (event == true) {
      this.showDetails = false;

    }
  }

  // this.items = this.bekleidungsFormService.getItems();  

  ngOnInit() {
    this.showDetails = false;
    this.count = 0;


    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });


  }
}


@Component({
  selector: 'dialogaftersubmit',
  templateUrl: 'dialog.html',
})
export class DialogAfterSubmit {

  constructor(
    public dialogRef: MatDialogRef<DialogAfterSubmit>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

