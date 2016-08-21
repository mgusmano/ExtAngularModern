import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExtJS } from './extangular/extjs';
import { ExtJS2 } from './extangular/extjs2';
import { ExtJSListControl } from './extangular/extjs.list.control';
import { ExtJSGridControl } from './extangular/extjs.grid.control';
import { ExtJSPivotGridControl } from './extangular/extjs.pivotgrid.control';
import { ExtJSCartesianControl } from './extangular/extjs.cartesian.control';

import { MainMComponent } from './view/main/mainm.component';
import { NavigationComponent } from './view/main/navigation.component';

import { ListComponent } from './view/main/list.component';
import { GridComponent } from './view/main/grid.component';
import { WidgetGridComponent } from './view/main/widgetgrid.component';
import { ChartComponent } from './view/main/chart.component';
import { PieComponent } from './view/main/pie.component';
import { PivotComponent } from './view/main/pivot.component';
import { AnalyzeComponent } from './view/main/analyze.component';
import { CalendarComponent } from './view/main/calendar.component';
import { CarouselComponent } from './view/main/carousel.component';
import { D3TreeListComponent } from './view/main/d3treelist.component';
import { BasicComponent } from './view/main/basic.component';

//const appRoutes: Routes = [
const appRoutes: any = [
	{ text: '', path: '', redirectTo: '/list', pathMatch: 'full' },
	{ text: 'List', path: 'list', component: ListComponent },
	{ text: 'Grid', path: 'grid', component: GridComponent },
	{ text: 'Widget Grid', path: 'widgetgrid', component: WidgetGridComponent },
	{ text: 'Chart', path: 'chart', component: ChartComponent },
	{ text: 'Pie', path: 'pie', component: PieComponent },
	{ text: 'Pivot', path: 'pivot', component: PivotComponent },
	{ text: 'Analyze', path: 'analyze', component: AnalyzeComponent },
	{ text: 'Calendar', path: 'calendar', component: CalendarComponent },
	{ text: 'Carousel', path: 'carousel', component: CarouselComponent },
	{ text: 'D3 Tree List', path: 'd3treelist', component: D3TreeListComponent },
	{ text: 'Basic', path: 'basic', component: BasicComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [ BrowserModule, routing ], 
	declarations: [ 
		MainMComponent, NavigationComponent, 
		ListComponent, GridComponent, WidgetGridComponent,
		ChartComponent, PieComponent,
		PivotComponent, AnalyzeComponent, CalendarComponent, CarouselComponent, D3TreeListComponent,
		BasicComponent, 
		ExtJS, ExtJS2, ExtJSListControl, ExtJSGridControl, ExtJSPivotGridControl, ExtJSCartesianControl,
	],
  bootstrap: [ MainMComponent ]
})
export class AppModuleM { }

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
