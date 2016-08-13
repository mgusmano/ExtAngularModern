import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExtJS } from './extangular/extjs';
import { ExtJSPivotGrid } from './extangular/extjs.pivotgrid';

import { MainMComponent } from './view/main/mainm.component';
import { NavigationComponent } from './view/main/navigation.component';
import { BasicComponent } from './view/main/basic.component';
import { ListComponent } from './view/main/list.component';
import { PivotComponent } from './view/main/pivot.component';
import { GridComponent } from './view/main/grid.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/basic', pathMatch: 'full' },
	{ path: 'basic', component: BasicComponent },
	{ path: 'list', component: ListComponent },
	{ path: 'pivot', component: PivotComponent },
	{ path: 'grid', component: GridComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports:      [ BrowserModule, routing ], 
  declarations: [ MainMComponent, NavigationComponent, 
									BasicComponent, ListComponent, PivotComponent, GridComponent,
									ExtJS, ExtJSPivotGrid
								],
  bootstrap:    [ MainMComponent ]
})
export class AppModuleM { }

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
