import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExtJS } from './extangular/extjs';
import { ExtJSPivotGrid } from './extangular/extjs.pivotgrid';

import { MainMComponent } from './view/main/mainm.component';
import { NavigationComponent } from './view/main/navigation.component';

import { ListComponent } from './view/main/list.component';
import { GridComponent } from './view/main/grid.component';
import { WidgetGridComponent } from './view/main/widgetgrid.component';
import { ChartComponent } from './view/main/chart.component';
import { PieComponent } from './view/main/pie.component';
import { PivotComponent } from './view/main/pivot.component';
import { AnalyzeComponent } from './view/main/analyze.component';
import { BasicComponent } from './view/main/basic.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'list', component: ListComponent },
	{ path: 'grid', component: GridComponent },
	{ path: 'widgetgrid', component: WidgetGridComponent },
	{ path: 'chart', component: ChartComponent },
	{ path: 'pie', component: PieComponent },
	{ path: 'pivot', component: PivotComponent },
	{ path: 'analyze', component: AnalyzeComponent },
	{ path: 'basic', component: BasicComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [ BrowserModule, routing ], 
	declarations: [ 
		MainMComponent, NavigationComponent, 
		ListComponent, GridComponent, WidgetGridComponent,
		ChartComponent, PieComponent,
		PivotComponent, AnalyzeComponent,  
		BasicComponent, 
		ExtJS, ExtJSPivotGrid
	],
  bootstrap: [ MainMComponent ]
})
export class AppModuleM { }

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
