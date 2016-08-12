import { enableProdMode }                    from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Routes, RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';

import { ExtJS } from './extangular/extjs';

import { MainMComponent }  from './view/main/mainm.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ], 
  declarations: [ MainMComponent, ExtJS ],
  bootstrap:    [ MainMComponent ]
})
export class AppModuleM { }

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
