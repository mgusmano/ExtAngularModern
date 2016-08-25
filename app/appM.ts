import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgencyService }  from './service/agency.service';

import { ExtJS } from './extangular/extjs';
import { ExtJS2 } from './extangular/extjs2';
import { ExtJSViewPortControl } from './extangular/extjs.viewport.control';
import { ExtJSListControl } from './extangular/extjs.list.control';
import { ExtJSDataViewControl } from './extangular/extjs.dataview.control';
import { ExtJSGridControl } from './extangular/extjs.grid.control';
import { ExtJSPivotGridControl } from './extangular/extjs.pivotgrid.control';
import { ExtJSCartesianControl } from './extangular/extjs.cartesian.control';

import { AllSpendingByPrimaryServiceAreaComponent } from './view/main/allspendingbyprimaryservicearea.component';
import { AllSpendingByTypeOfInvestmentComponent } from './view/main/allspendingbytypeofinvestment.component';
import { AgencySpendingByITPortfolioComponent } from './view/main/agencyspendingbyitportfolio.component';
import { AgencySpendingByTypeOfInvestmentComponent } from './view/main/agencyspendingbytypeofinvestment.component';

import { MainMComponent } from './view/main/mainm.component';
import { HeaderComponent } from './view/main/header.component';
import { FooterComponent } from './view/main/footer.component';
import { DetailComponent } from './view/main/detail.component';
import { ViewPortComponent } from './view/main/viewport.component';
import { NavigationComponent } from './view/main/navigation.component';
import { SideBarComponent } from './view/main/sidebar.component';

import { HomeComponent } from './view/main/home.component';
import { ListComponent } from './view/main/list.component';
import { DataViewComponent } from './view/main/dataview.component';
import { AgencyGridComponent } from './view/main/agencygrid.component';
import { GridComponent } from './view/main/grid.component';
import { WidgetGridComponent } from './view/main/widgetgrid.component';
import { ChartComponent } from './view/main/chart.component';
import { PieComponent } from './view/main/pie.component';
import { ConfiguratorComponent } from './view/main/configurator.component';
import { AnalyzeComponent } from './view/main/analyze.component';
import { CalendarComponent } from './view/main/calendar.component';
import { CarouselComponent } from './view/main/carousel.component';
import { D3TreeListComponent } from './view/main/d3treelist.component';
import { BasicComponent } from './view/main/basic.component';

//const appRoutes: Routes = [
const appRoutes: any = [
	{ text: '', path: '', redirectTo: '/home', pathMatch: 'full' },
	{ icon: 'dashboard', text: 'Home', path: 'home', component: HomeComponent },
	{ icon: 'dashboard', text: 'Agency View', path: 'allsbpsa', component: AllSpendingByPrimaryServiceAreaComponent },
	{ icon: 'dashboard', text: 'Agency View', path: 'allsbtoi', component: AllSpendingByTypeOfInvestmentComponent },
	{ icon: 'dashboard', text: 'Agency View', path: 'asbitp', component: AgencySpendingByITPortfolioComponent },
	{ icon: 'dashboard', text: 'Agency View', path: 'dataview', component: DataViewComponent },
	{ icon: 'cog', text: 'Agency List', path: 'list', component: ListComponent },
	{ icon: 'dashboard', text: 'Agency Grid', path: 'agencygrid', component: AgencyGridComponent },
	{ icon: 'dashboard', text: 'Grid', path: 'grid', component: GridComponent },
	{ icon: 'dashboard', text: 'Widget Grid', path: 'widgetgrid', component: WidgetGridComponent },
	{ icon: 'bar-chart-o', text: 'Chart', path: 'chart', component: ChartComponent },
	{ icon: 'dashboard', text: 'Pie', path: 'pie', component: PieComponent },
	{ icon: 'dashboard', text: 'Pivot', path: 'asbtoi', component: AgencySpendingByTypeOfInvestmentComponent },
	{ icon: 'dashboard', text: 'Configurator', path: 'configurator', component: ConfiguratorComponent },
	{ icon: 'dashboard', text: 'Analyze', path: 'analyze', component: AnalyzeComponent },
	{ icon: 'dashboard', text: 'Calendar', path: 'calendar', component: CalendarComponent },
	{ icon: 'dashboard', text: 'Carousel', path: 'carousel', component: CarouselComponent },
	{ icon: 'dashboard', text: 'D3 Tree List', path: 'd3treelist', component: D3TreeListComponent },
	{ icon: 'dashboard', text: 'Basic', path: 'basic', component: BasicComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [ BrowserModule, routing ], 
	declarations: [ 
		MainMComponent, HeaderComponent, FooterComponent, DetailComponent, NavigationComponent, SideBarComponent, ViewPortComponent,
		AllSpendingByPrimaryServiceAreaComponent, AllSpendingByTypeOfInvestmentComponent, 
		AgencySpendingByITPortfolioComponent, AgencySpendingByTypeOfInvestmentComponent,
		HomeComponent, ListComponent, DataViewComponent, AgencyGridComponent, GridComponent, WidgetGridComponent,
		ChartComponent, PieComponent, ConfiguratorComponent,
		AnalyzeComponent, CalendarComponent, CarouselComponent, D3TreeListComponent,
		BasicComponent, 
		ExtJS, ExtJS2, 
		ExtJSViewPortControl, ExtJSListControl, ExtJSDataViewControl, ExtJSGridControl, ExtJSPivotGridControl, ExtJSCartesianControl,
	],
	providers: [ AgencyService ],
  bootstrap: [ MainMComponent ]
})
export class AppModuleM { }

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
