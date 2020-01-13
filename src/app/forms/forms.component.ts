import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
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
  currentCheckedValue = null;

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
    Vorname: new FormControl(null, Validators.required),
    Nachname: new FormControl(null, Validators.required),
    Adresse: new FormControl(null, Validators.required),
    Ort: new FormControl(null, Validators.required),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    PLZ: new FormControl(null, Validators.maxLength(5)),
    kleidsize: new FormControl(null),
    kleidamount: new FormControl(null),
    blusesize: new FormControl(null),
    bluseamount: new FormControl(null),
    hosesize: new FormControl(null),
    hoseamount: new FormControl(null),
    bluse1size: new FormControl(null),
    bluse1amount: new FormControl(null),
    kostumsize: new FormControl(null),
    kostumamount: new FormControl(null),


    Name_der_Veranstaltung: new FormControl(null, Validators.required),
    von_Datum: new FormControl(null, Validators.required),
    bis_Datum: new FormControl(null, Validators.required),
    Ort_der_Veranstaltung: new FormControl(null, Validators.required),
    Zusätzliche_Anmerkungen: new FormControl(null),
    host: new FormControl(null, Validators.required),
    hostess : new FormControl(null, Validators.required),
    Zeiten_Planung : new FormControl(null, [Validators.required, Validators.minLength(20)]),


  });

  personForm = new FormGroup({
    Vorname: new FormControl(null, Validators.required),
    Nachname: new FormControl(null, Validators.required),
    Firmen_Name: new FormControl(null),
    Telefon: new FormControl(null, Validators.required),
    Email: new FormControl(null, [Validators.required, Validators.email]),

    Name_der_Veranstaltung: new FormControl(null, Validators.required),
    von_Datum: new FormControl(null, Validators.required),
    bis_Datum: new FormControl(null, Validators.required),
    Ort_der_Veranstaltung: new FormControl(null, Validators.required),
    Zusätzliche_Anmerkungen: new FormControl(null),
    host: new FormControl(null, Validators.required),
    hostess : new FormControl(null, Validators.required),
    Zeiten_Planung : new FormControl(null, [Validators.required, Validators.minLength(20)]),

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
    Vorname: new FormControl(null, Validators.required),
    Nachname: new FormControl(null),
    Telefon: new FormControl(null),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Hausnummer: new FormControl(null),
    Strasse: new FormControl(null),
    Ort: new FormControl(null),
    PLZ: new FormControl(null),
    Studium: new FormControl(null),
    Semester: new FormControl(null),
    Abschlussjahr: new FormControl(null),
    Fuehrerschein: new FormControl(null),
    pkw: new FormControl(null),
    Gesundheitszeugnis: new FormControl(null),
    Englisch: new FormControl(null),
    Franzoesich: new FormControl(null),
    Spanisch: new FormControl(null),
    Tuerkisch: new FormControl(null),
    Persisch: new FormControl(null),
    Sonstiges: new FormControl(null),
    Andere_Agenturen: new FormControl(null),

    Veranstaltung:  new FormControl(null),
    Agentur_Stadt: new FormControl(null),
    Monate: new FormControl(null),
    Jahr: new FormControl(null),

    Veranstaltung1:  new FormControl(null),
    Agentur_Stadt1: new FormControl(null),
    Monate1: new FormControl(null),
    Jahr1: new FormControl(null),

    Veranstaltung2:  new FormControl(null),
    Agentur_Stadt2: new FormControl(null),
    Monate2: new FormControl(null),
    Jahr2: new FormControl(null),

    Veranstaltung3:  new FormControl(null),
    Agentur_Stadt3: new FormControl(null),
    Monate3: new FormControl(null),
    Jahr3: new FormControl(null),

    Veranstaltung4:  new FormControl(null),
    Agentur_Stadt4: new FormControl(null),
    Monate4: new FormControl(null),
    Jahr4: new FormControl(null),

    Veranstaltung5:  new FormControl(null),
    Agentur_Stadt5: new FormControl(null),
    Monate5: new FormControl(null),
    Jahr5: new FormControl(null),

    Veranstaltung6:  new FormControl(null),
    Agentur_Stadt6: new FormControl(null),
    Monate6: new FormControl(null),
    Jahr6: new FormControl(null),

    Veranstaltung7:  new FormControl(null),
    Agentur_Stadt7: new FormControl(null),
    Monate7: new FormControl(null),
    Jahr7: new FormControl(null),

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
    private renderer: Renderer2,
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

  multiple(event){
    setTimeout(() => {
      if (this.currentCheckedValue && this.currentCheckedValue === event.value) {
        event.checked = false;
        this.renderer.removeClass(event['_elementRef'].nativeElement, 'cdk-focused');
        this.renderer.removeClass(event['_elementRef'].nativeElement, 'cdk-program-focused');
        this.currentCheckedValue = null;
      } else {
        this.currentCheckedValue = event.value
      }
    })

  }

  onChecked(event) {

    this.showDetails = true;
    if (event == true) {
      this.showDetails = false;

    }
  }

  // this.items = this.bekleidungsFormService.getItems();  

  ngOnInit() {
    this.isFilled = false;
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

