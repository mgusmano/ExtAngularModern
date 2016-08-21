import { Component } from '@angular/core';
import { SalesStore } from '../../store/sales.store';

@Component({
  selector: '',
	template: `
		<extjs-pivotgrid 
			[config]='pivotgridConfig'
			[title] ='pivotTitle'
			(ready)="readyPivotGrid($event)"
			(pivotdone)="onPivotDone($event)"
		></extjs-pivotgrid>
		<extjs-cartesian 
			[config]='cartesianConfig' 
			(ready)="readyCartesian($event)" 
		></extjs-cartesian>
	`
})
export class AnalyzeComponent { 

	private border:any = 0;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)';
	private headerHeight:any = 0;
	private mainHeight: any = '50% - ' + (this.headerHeight / 2) + 'px ';
	private chartHeight: any = this.mainHeight + ' + ' + this.headerHeight + 'px ';
	private thePivotGrid; any;
	private theCartesian: any;
	private pivotgridConfig: any;
	private cartesianConfig: any;
	private pivotTitle: any;

	constructor() {
		this.cartesianInit();
		this.pivotgridInit();
	}

	readyPivotGrid(thePivotGrid) {
		this.thePivotGrid = thePivotGrid;
	}
	readyCartesian(theCartesian) {
		this.theCartesian = theCartesian;
	}

	pivotgridInit() {
		this.pivotTitle = 'By Country';
		this.pivotgridConfig= {
			left: 0, top: this.headerHeight,
			style: { width: this.size, height: 'calc(' + this.mainHeight + ')', border: '10px solid #e9e9e9' },
			shadow: true,
			matrix: {
				type: 'local',
				viewLayoutType: 'outline',
				rowGrandTotalsPosition: 'none',
				columnGrandTotalsPosition: 'none',
				store: new SalesStore({}).extjsObject,
				leftAxis: [
					{ dataIndex: 'salesperson', direction: 'ASC', header: 'Salesperson', width: 150 }
				],
				topAxis: [
					{ dataIndex: 'country', direction: 'ASC' }
				],
				aggregate: [
					{ dataIndex: 'amount', header: 'Total', aggregator: 'sum', width: 150 }
				]
			}
		};
	}

	cartesianInit() {
		this.cartesianConfig = {
			left: 0, top: 'calc(' + this.chartHeight + ')' ,
			style: { width: this.size, height: 'calc(' + this.mainHeight +  ')', border: '10px solid #e9e9e9' },
			legend: { type: 'sprite', position: 'bottom' },
			series: [
				{ 
					type: 'bar',
					xField: 'salesperson',
					yField: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'], 
					title: ['Belgium', 'Canada', 'Netherlands', 'United Kingdom', 'United States', 'Total'],
					stacked: false
				}
			],
			axes: [
				{
					type:       'numeric',
					position:   'left',
					renderer: function (axis, label, layoutContext) {
						var value = layoutContext.renderer(label) / 1000;
						return value === 0 ? '$0' : Ext.util.Format.number(value, '$0K');
					},
					grid: {
						odd: { fillStyle: 'rgba(255, 255, 255, 0.06)' },
						even: { fillStyle: 'rgba(0, 0, 0, 0.03)' }
					}
				},
				{
					type:       'category',
					fields: 		'salesperson',
					position:   'bottom'
				}
			]
		};
	}

	private onPivotDone(o) {
		var matrix = o.matrix;
		var eOpts = o.eOpts;
		var seriesYField = []; 
		var seriesTitle = [];
		var dataFields = [];
		var chartSeriesStore;
		var columns = matrix.columns;
		columns.forEach(function(column) {
			if(column.leftAxis) {
				dataFields.push(column.dataIndex);
			}
			if(!column.leftAxis) {
				dataFields.push(column.dataIndex);
				seriesYField.push(column.dataIndex);
				seriesTitle.push(column.text);
			}
		});
		chartSeriesStore = matrix.pivotStore;
		this.doChartOptions(dataFields, seriesYField, seriesTitle, chartSeriesStore);
	}

	private doChartOptions(dataFields, seriesYField, seriesTitle, chartSeriesStore) {
		var data:any = [];
		var i:any = 0;
		chartSeriesStore.data.items.forEach(function(arrayItem) {
				if (arrayItem.data.isRowGrandTotal == false) {
					data.push(arrayItem.data);
				}
		});
		var	store:any = {
			fields: [dataFields],
			data: data
		}
		var chart = this.theCartesian.extjsObject;
		chart.getSeries()[0]._xField = 'ext-5';
		chart.getSeries()[0]._yField = seriesYField;
		chart.getSeries()[0]._title =  seriesTitle;
		chart.setStore(store);
	}

}
