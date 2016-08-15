import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';
import { SalesStore } from '../../store/sales.store';

@Component({
  selector: '',
	template: `
		<extjs [xtype]='"selectfield"' [config]='combo'></extjs>
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
	private pivotgridConfig: any;
	private cartesianConfig: any;


constructor() {
	//console.log(this.mainHeight);
	//console.log(this.chartHeight);
	this.pivotgridInit();
	this.cartesianInit();
}

	readyPivotGrid(thePivotGrid) {
		console.log('ready');
		this.thePivotGrid = thePivotGrid;
	}
	readyCartesian(theCartesian) {
		this.theCartesian = theCartesian;
	}

	private onReportComboChange(combo, newValue, oldValue, eOpts) {
		debugger;
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


	combo: any = { 
		left: 0, top: this.border,
		style: { width: this.size, height: this.headerHeight + 'px', border: '10px solid #e9e9e9' },
		label:'Select report',
		options: [
					{ value: 'By Country', text: 'What are the order amounts of each salesperson in a specific country?' },
					{ value: 'By Year', text: 'How did salespeople perform in a specific year?' },
					{ value: 'Total', text: 'What are the order amounts of each salesperson?' }
				]
		};

	// buttonConfig: any = { 
	// 	left: 0, top: this.border,
	// 	style: { width: this.size, height: this.headerHeight + 'px' },
	// 	//left: this.border, top: this.border,
	// 	//style: { width: this.size, height: this.size },
	// 	text: 'hello',
	// 	ui: 'action',
	// };
	// onButtonClickHello(event) {
	// 	console.log(event);
	// 	event.stopPropagation();
	// }

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

//			border: false,
//			style: { border: '10px solid white' },
		// interactions: ['itemhighlight'],
		// legend2: {
		// 	//type: 'dom',
		// 	frame: true,
		// 	docked: 'top', 
		// 	border: 5,
		// 	style: {
		// 			borderColor: 'red',
		// 			borderStyle: 'solid'
		// 	}
		// },
			legend: {
					type: 'sprite',
					docked: 'top',
					marker: {
							type: 'square'
					},
					border: {
							radius: 10
					}
			},
		series: { 
			id: '1', 
			type: 'bar', 
			stacked: false,
			xField: 'salesperson',
			yField: 'c1', 
			title: 'c1'
		},
		axes: [
			{
				type:       'category',
				fields:     ['salesperson'],
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
		console.log('done');
		//debugger;
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
		chartSeriesStore.data.items.forEach(function(arrayItem) {
				var o:any = {};
				o.salesperson = arrayItem.data.salesperson;
				storeFields.push('salesperson');
				xAxisChartCategoriesFields.forEach(function(field) {
					o[field] = arrayItem.data[field];
					storeFields.push(field);
				});
				data.push(o);
		});

		var	store:any = {
			fields: storeFields,
			data: data
		}
		var chart = this.theCartesian.extjsObject;
		//chart.axes[1].setFields(xAxisChartCategoriesFields);
		console.log(xAxisChartCategoriesTitles);
		var series = { 
			id: '1', 
			type: 'line', 
			stacked: false,
			xField: 'salesperson',
			//yField: 'c1' 
			yField: xAxisChartCategoriesFields, 
			//title: xAxisChartCategoriesTitles, 
			//label: { field: xAxisChartCategoriesFields } 
		};
		chart.setStore(store);

		//chart.removeSeries('1');
		chart.addSeries(series);
		//chart.setStore(chartSeriesStore);
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
