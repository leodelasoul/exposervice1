import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';




import { WINDOW_PROVIDERS } from "./services/window.service"; 
// import {FORM_PROVIDERS} from "./services/bekleidungsForm.service"
import { MainContentComponent} from './main/main.component';
import {InfofooterComponent} from './info-footer/info-footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { FormsComponent } from './forms/forms.component';
import {AngularMaterial} from './material-module';


const appRoutes: Routes = [
  // { path: 'form/:id', component: FormsComponent, outlet: "form-out",  pathMatch: 'full'}];
  {
    path : 'form/:id', component: FormsComponent
  }

]
  


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    InfofooterComponent,
    HeaderComponent,
    LandingSectionComponent,
    FormsComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    AngularMaterial
    

  ],
  providers: [WINDOW_PROVIDERS,
  
  
  ], //FORM_PROVIDERS
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
