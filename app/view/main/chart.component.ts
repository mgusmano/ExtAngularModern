import { Component, OnInit } from '@angular/core';
//import { CompanyStore } from '../../store/company.store';

@Component({
  selector: '',
	template: `
		<extjs [xtype]='"cartesian"' [config]='cartesianConfig' ></extjs>
	`
})
export class ChartComponent implements OnInit { 
//		<extjs [xtype]='"polar"' [config]='polarConfig' ></extjs>

	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private polarConfig:any = {};
	private cartesianConfig:any = {};

  ngOnInit() {

		this.cartesianConfig = {
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			store: {
					fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
					data: [
							{'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
							{'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
							{'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
							{'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
							{'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
					]
			},

			//constrain: true,
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
			series: [
				{
					type: 'bar',
					xField: 'name',
					yField: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
					title: ['Apples', 'Oranges', 'Bananas', 'Plums', 'Mangos', 'Pears'],
					stacked: false,
					style: {
							lineWidth: 2,
							//maxBarWidth: 50
					}
				}
			],
			axes: [
				{
					type: 'numeric',
					position: 'left',
					fields: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
					label: {
							rotate: {
									degrees: -30
							}
					}
				}, 
				{
					type: 'category',
					position: 'bottom',
					fields: 'name',
					visibleRange: [0, 0.2]
				}
			]
		};


		this.polarConfig = {
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			store: {
					fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
					data: [
							{'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
							{'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
							{'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
							{'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
							{'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
					]
			},

			interactions: 'rotate',
			colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
			series: {
					type: 'pie',
					label: {
							field: 'name',
							display: 'rotate'
					},
					xField: 'data3',
					donut: 30
			}
		};

	}

}




// 	polarConfig2: any = { 
// //		left: 10, top: 10,
// //		style: { width: '200px', height: '200px' },
// 		//left: this.border, top: this.border,
// 		//style: { width: this.size, height: this.size },

// 		//shadow: true,
// 		store: Ext.create('Ext.data.Store', {
// 			config: {
// 					fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
// 			},
// 			data: [
// 				{ id: 1, g1: 1, name: 'marc'}
// 			]
// 		}),
// 		//interactions: ['rotate', 'itemhighlight'],
// 		// legend: {
// 		// 		position: 'right',
// 		// 		verticalWidth: 70
// 		// },
// 		//innerPadding: Ext.os.is.Desktop ? 40 : 10,
// 		series: [{
// 				type: 'pie',
// 				xField: 'g1',
// 				label: {
// 						field: 'name'
// 				},
// 				// donut: 30,
// 				// highlightCfg: {
// 				// 		margin: 20
// 				// },
// 				// style: {
// 				// 		stroke: 'white',
// 				// 		miterLimit: 10,
// 				// 		lineCap: 'miter',
// 				// 		lineWidth: 2
// 				// }
// 		}],
// 		axes: []
// 	};

//}