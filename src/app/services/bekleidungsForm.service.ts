// import { isPlatformBrowser } from "@angular/common";
// import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';


// export abstract class Form {

//     get getItems(): Object {
//       throw new Error('Not implemented.');
//     }
  
//   }

// export class bekleidungsForm extends Form {



//     constructor(name : String, surname: String, email : String) {
        
//     }
  
//     // public getItems(){
//     //     var items = {
//     //         this.name = 
//     //     }

//     // }
  
//   }

//   export const browserWindowProvider: ClassProvider = {
//     provide: WindowRef,
//     useClass: bekleidungsForm
//   };
  
//   /* Create an injectable provider that uses the windowFactory function for returning the native window object. */
//   export const windowProvider: FactoryProvider = {
//     provide: WINDOW,
//     useFactory: windowFactory,
//     deps: [ WindowRef, PLATFORM_ID ]
//   };
  
//   /* Create an array of providers. */
//   export const FORM_PROVIDERS = [
//     browserWindowProvider,
//     windowProvider
//   ];
  