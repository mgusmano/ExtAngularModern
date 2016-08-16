import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';
import { SalesStore } from '../../store/sales.store';

@Component({
  selector: '',
	template: `
		<extjs [xtype]='"selectfield"' [config]='comboConfig'></extjs>
		<extjs [xtype]='"pivotgrid"'   [config]='pivotgridConfig' (ready)="readyPivotGrid($event)"></extjs>
		<extjs [xtype]='"cartesian"'   [config]='cartesianConfig' (ready)="readyCartesian($event)" ></extjs>
	`
})
export class AnalyzeComponent { 
	private border:any = 0;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)';
	private headerHeight:any = 60;
	private mainHeight: any = '50% - ' + (this.headerHeight / 2) + 'px ';
	private chartHeight: any = this.mainHeight + ' + ' + this.headerHeight + 'px ';
	//private mainHeight: any = 'calc(' + '50% - ' + this.headerHeight + 'px' + ')';
	//private chartHeight: any = 'calc(50% - ' + this.headerHeight + 'px + ' + d + 'px)';
	private thePivotGrid; any;
	private theCartesian: any;
	private comboConfig: any;
	private pivotgridConfig: any;
	private cartesianConfig: any;

	constructor() {
		this.comboInit();
		this.pivotgridInit();
		this.cartesianInit();
	}

	readyPivotGrid(thePivotGrid) {
		this.thePivotGrid = thePivotGrid;
	}
	readyCartesian(theCartesian) {
		this.theCartesian = theCartesian;
	}

	private onReportComboChange(combo, newValue, oldValue, eOpts) {
		var topAxis = {};
		switch(newValue){
			case 'By Country':
				topAxis = { topAxis: [{	dataIndex: 'country', direction: 'ASC' }] };
				break;
			case 'By Year':
				topAxis = { topAxis: [{ dataIndex: 'year', direction: 'ASC' }] };
				break;
			case 'Total':
				topAxis = {	topAxis: [] };
				break;
		}
		this.thePivotGrid.extjsObject.reconfigurePivot(topAxis);
		// this.chartlabel.setText(newValue);
	};

	comboInit() {
		this.comboConfig = { 
			left: 0, top: this.border,
			style: { width: this.size, height: this.headerHeight + 'px', border: '10px solid white' },
			label:'Select report',
			options: [
						{ value: 'By Country', text: 'What are the order amounts of each salesperson in a specific country?' },
						{ value: 'By Year', text: 'How did salespeople perform in a specific year?' },
						{ value: 'Total', text: 'What are the order amounts of each salesperson?' }
					]
			};
	}

	pivotgridInit() {
		this.pivotgridConfig= {
			left: 0, top: this.headerHeight,
			style: { width: this.size, height: 'calc(' + this.mainHeight + ')', border: '10px solid #e9e9e9' },
			shadow: true,
			listeners: {
				scope: this,
				pivotdone: this.onPivotDone
			},
			matrix: {
				type: 'local',
				viewLayoutType: 'outline',
				rowGrandTotalsPosition: 'none',
				columnGrandTotalsPosition: 'none',
				store: new SalesStore({}).extjsObject,
				leftAxis: [
					{
						dataIndex: 'country',
						direction: 'DESC',
						header: 'Countries',
						width: 150
					}
				],
				topAxis: [
					{
						dataIndex: 'salesperson',
						direction: 'ASC'
					}
				],
				aggregate: [
					{
						dataIndex: 'amount',
						header: 'Total',
						aggregator: 'sum',
						width: 120
					}
				]
			}
		};
	}

	cartesianInit() {
		this.cartesianConfig = {
			left: 0, top: 'calc(' + this.chartHeight + ')' ,
			style: { width: this.size, height: 'calc(' + this.mainHeight +  ')', border: '10px solid #e9e9e9' },
			legend: {
					type: 'sprite',
					position: 'bottom'
			},
			innerPadding: '0 3 0 3',
			insetPadding: '30 10 10 10',
			interactions: [
				{
					type: 'panzoom',
					axes: {
							left: {
									allowPan: false,
									allowZoom: false
							},
							bottom: {
									allowPan: true,
									allowZoom: true
							}
					}
				}
			],

			// legend: {
			// 	type: 'sprite',
			// 	docked: 'top',
			// 	marker: {
			// 			type: 'square'
			// 	},
			// 	border: {
			// 			radius: 10
			// 	}
			// },
			series: [
				{ 
					//id: '1', 
					type: 'bar', 
					xField: 'country',
					yField: ['c1', 'c2', 'c3', 'c4', 'c5'], 
					title: ['Jane','John', 'Lisa', 'Michael', 'Total'],
					//title: ['United States','United Kingdom', 'Netherlands', 'Canada', 'Belgium'],
					stacked: false
				}
			],
			axes: [
				{
					type:       'category',
					fields:     ['country'],
					position:   'bottom'
				},
				{
					type:       'numeric',
					position:   'left',
					majorTickSteps: 5,
					renderer: function (axis, label, layoutContext) {
						var value = layoutContext.renderer(label) / 1000;
						return value === 0 ? '$0' : Ext.util.Format.number(value, '$0K');
					},
					grid: {
						odd: { fillStyle: 'rgba(255, 255, 255, 0.06)' },
						even: { fillStyle: 'rgba(0, 0, 0, 0.03)' }
					}
				}
			]
		};
	}

	private onPivotDone( matrix , eOpts) {
		var xAxisChartCategoriesFields = []; 
		var xAxisChartCategoriesTitles = [];
		var chartSeriesStore;
		//var pivotgrid = this.thePivotGrid.extjsObject;
		//console.log(pivotgrid);
		//var columns = this.thePivotGrid.extjsObject.headerCt.getGridColumns();
		//var columns = pivotgrid.pivotColumns;
		var columns = matrix.columns;
		//debugger;
		columns.forEach(function(column) {
			if(!column.leftAxis) {
				xAxisChartCategoriesFields.push(column.dataIndex);
				xAxisChartCategoriesTitles.push(column.text);
			}
		});
		//chartSeriesStore = pivotgrid.getStore();
		chartSeriesStore = matrix.pivotStore;
		this.doChartOptions(xAxisChartCategoriesFields, xAxisChartCategoriesTitles, chartSeriesStore);






		// debugger;
		// var xAxisChartCategoriesFields = []; 
		// var xAxisChartCategoriesTitles = [];
		// var chartSeriesStore;
		// var columns = this.thePivotGrid.extjsObject.headerCt.getGridColumns();
		
		// columns.forEach(function(column) {
		// 	if(!column.leftAxis) {
		// 		xAxisChartCategoriesFields.push(column.dataIndex);
		// 		xAxisChartCategoriesTitles.push(column.text);
		// 	}
		// });
		// chartSeriesStore = this.thePivotGrid.extjsObject.getPivotStore();
		// //this.doChartOptions(xAxisChartCategoriesFields, xAxisChartCategoriesTitles, chartSeriesStore);
	}

	private doChartOptions(xAxisChartCategoriesFields, xAxisChartCategoriesTitles, chartSeriesStore) {
		//debugger;
		var array: any = chartSeriesStore.data.items;
		var data:any = [];
		var storeFields:any = [];
		var countries:any = ['United States','United Kingdom', 'Netherlands', 'Canada', 'Belgium'];
		var i:any = 0;
		chartSeriesStore.data.items.forEach(function(arrayItem) {
				var o:any = {};
				//debugger;
				//o.salesperson = arrayItem.data.salesperson;
				//debugger;
				o.country = countries[i]; i++;
				storeFields.push(o.country);
				xAxisChartCategoriesFields.forEach(function(field) {
					o[field] = arrayItem.data[field];
					storeFields.push(field);
				});
				if (o.country != undefined) {
					data.push(o);
				}
		});

		var	store:any = {
			fields: ['c1', 'c2','c3','c4','c5', 'country'],
			data: data
		}
		console.log(storeFields);
		console.log(data);
		var chart = this.theCartesian.extjsObject;
		//chart.axes[1].setFields(xAxisChartCategoriesFields);
		console.log(xAxisChartCategoriesFields);
		console.log(xAxisChartCategoriesTitles);
		var series = { 
			//id: '1', 
			type: 'bar', 
			stacked: false,
			xField: 'country',
			//yField: 'c1' 
			yField: xAxisChartCategoriesFields, 
			//title: xAxisChartCategoriesTitles, 
			//label: { field: xAxisChartCategoriesFields } 
		};
		// var series = {
		// 		type: 'bar', 
		// 		xField: 'salesperson',
		// 		yField: ['c1'], 
		// 		title: ['theTitle'],
		// 		stacked: false
		// }

		//chart.removeSeries('1');
		//chart.addSeries(series);
		//chart.setStore(chartSeriesStore);
		chart.setStore(store);
	}



	listConfig: any = { 
		left: 0, top: this.headerHeight,
		style: { width: this.size, height: 'calc(' + this.mainHeight + ')', border: '10px solid #e9e9e9' },
		shadow: true,
		showAnimation: 'flip',
		rowLines: true,
		itemTpl: '{name} - {phone}',
		store: new CompanyStore({}).extjsObject
	};

	listConfig2: any = { 
		left: 0, top: 'calc(' + this.chartHeight + ')' ,
		style: { width: this.size, height: 'calc(' + this.mainHeight +  ')', border: '10px solid #e9e9e9' },
		shadow: true,
		showAnimation: 'flip',
		rowLines: true,
		itemTpl: '{name} - {phone}',
		store: new CompanyStore({}).extjsObject
	};

	readyList(theList) {
		//console.log(theList);
	}

}
