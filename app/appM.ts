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
import { ExtJSPolarControl } from './extangular/extjs.polar.control';

import { AllSpendingByPrimaryServiceAreaComponent } from './view/main/allspendingbyprimaryservicearea.component';
import { AllSpendingByTypeOfInvestmentComponent } from './view/main/allspendingbytypeofinvestment.component';
import { AgencySpendingByITPortfolioComponent } from './view/main/agencyspendingbyitportfolio.component';
import { AgencySpendingByTypeOfInvestmentComponent } from './view/main/agencyspendingbytypeofinvestment.component';
import { AgencySpendingByBureauComponent } from './view/main/agencyspendingbybureau.component';

import { PurchasesByDayComponent } from './view/main/purchasesbyday.component';

import { MainMComponent } from './view/main/mainm.component';
import { HeaderComponent } from './view/main/header.component';
import { FooterComponent } from './view/main/footer.component';
import { DetailComponent } from './view/main/detail.component';
import { ViewPortComponent } from './view/main/viewport.component';
import { SideBarComponent } from './view/main/sidebar.component';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ListComponent } from './view/main/list.component';
import { AgenciesComponent } from './view/main/agencies.component';
import { SpendingDetailComponent } from './view/main/spendingdetail.component';
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
	{ text: '', path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ text: 'Dashboard', path: 'dashboard', component: DashboardComponent },
	{ path: 'agencies', component: AgenciesComponent },
	{ path: 'spendingdetail', component: SpendingDetailComponent },
	{ text: 'Purchases By Day', path: 'pbd', component: PurchasesByDayComponent },
	{ text: 'Agency View', path: 'allsbpsa', component: AllSpendingByPrimaryServiceAreaComponent },
	{ text: 'Agency View', path: 'allsbtoi', component: AllSpendingByTypeOfInvestmentComponent },
	{ text: 'Agency View', path: 'asbitp', component: AgencySpendingByITPortfolioComponent },
	{ text: 'Agency View', path: 'asbb', component: AgencySpendingByBureauComponent },
	{ icon: 'cog', text: 'Agency List', path: 'list', component: ListComponent },
	{ text: 'Widget Grid', path: 'widgetgrid', component: WidgetGridComponent },
	{ icon: 'bar-chart-o', text: 'Chart', path: 'chart', component: ChartComponent },
	{ text: 'Pie', path: 'pie', component: PieComponent },
	{ text: 'Pivot', path: 'asbtoi', component: AgencySpendingByTypeOfInvestmentComponent },
	{ text: 'Configurator', path: 'configurator', component: ConfiguratorComponent },
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
		MainMComponent, HeaderComponent, FooterComponent, DetailComponent, SideBarComponent, ViewPortComponent,
		AllSpendingByPrimaryServiceAreaComponent, AllSpendingByTypeOfInvestmentComponent, 
		AgencySpendingByITPortfolioComponent, AgencySpendingByTypeOfInvestmentComponent, AgencySpendingByBureauComponent,
		DashboardComponent, ListComponent, AgenciesComponent, SpendingDetailComponent, WidgetGridComponent,
		ChartComponent, PieComponent, ConfiguratorComponent,
		AnalyzeComponent, CalendarComponent, CarouselComponent, D3TreeListComponent,
		PurchasesByDayComponent,
		BasicComponent, 
		ExtJS, ExtJS2, ExtJSViewPortControl, 
		ExtJSListControl, ExtJSDataViewControl, ExtJSGridControl, ExtJSPivotGridControl, ExtJSCartesianControl, ExtJSPolarControl
	],
	providers: [ AgencyService ],
  bootstrap: [ MainMComponent ]
})
export class AppModuleM { }

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
