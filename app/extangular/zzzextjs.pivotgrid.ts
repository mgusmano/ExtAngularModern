// import { Component, Input, OnInit, ElementRef, EventEmitter, Attribute } from '@angular/core';
// import { ExtJSBase } from './extjs.base';

// @Component({
// 	selector: 'extjs-pivotgrid',
// 	outputs: [
// 		'ready',
// 		'select',
// 		'pivotdone',
// 		'pivotgroupcellclick'
// 	],
// 	template: ``
// })
// export class ExtJSPivotGrid2 extends ExtJSBase implements OnInit {
// 	@Input() private title: string = '';
// 	@Input() private topAxis: any = {};
// 	@Input() private leftAxis: any = {};
// 	@Input() private aggregate: any = {};
// 	@Input() private store: any = {};
// 	@Input() private config: any = {};

// 	private xtype: string = 'list';
// 	private listeners = {};

// 	// private PIVOTGRIDEVENTS = [
// 	// 	'cellclick',
// 	// 	'pivotdone',
// 	// 	'pivotgroupcellclick'
// 	// ]
// 	// private PIVOTGRIDPARAMETERS = [
// 	// 	'this, td, cellIndex, record, tr, rowIndex, e, eOpts',
// 	// 	'matrix,eOpts',
// 	// 	'params, e, eOpts'
// 	// ]

// 	private PGEVENTS = [
// 		{ name: 'select', parameters: 'pivotgrid,record,eOpts' },
// 		{ name: 'pivotdone', parameters: 'matrix,eOpts' },
// 		{ name: 'pivotgroupcellclick', parameters: 'params,e,eOpts' },
// 	]

// 	constructor(myElement: ElementRef) {
// 		super(myElement);

// 		let me = this;
// 		this['ready'] = new EventEmitter();
// 		this.PGEVENTS.forEach( (event, n) => {
// 			(<any>this)[event.name] = new EventEmitter();
// 			this.listeners[event.name] = function() {
// 					let parameters = event.parameters;
// 					let parms = parameters.split(',');
// 					let args = Array.prototype.slice.call(arguments);
// 					let o: any = {};
// 					for (let i = 0, j = parms.length; i < j; i++ ) {
// 						if (parms[i] !== 'eOpts') {
// 							o[parms[i]] = args[i];
// 						}
// 					}
// 					me[event.name].next(o);
// 			};
// 		});

// 		// me.PIVOTGRIDEVENTS.forEach( (eventName, n) => {
// 		// 	(<any>this)[eventName] = new EventEmitter();
// 		// 	me.listeners[eventName] = function() {
// 		// 			let parameters = me.PIVOTGRIDPARAMETERS[n];
// 		// 			let parms = parameters.split(',');
// 		// 			let args = Array.prototype.slice.call(arguments);
// 		// 			let o: any = {};
// 		// 			for (let i = 0, j = parms.length; i < j; i++ ) {
// 		// 				if (parms[i] !== 'eOpts') {
// 		// 					o[parms[i]] = args[i];
// 		// 				}
// 		// 			}
// 		// 			me[eventName].next(o);
// 		// 	};
// 		// });


// 		//console.log(me.listeners);
// 	}

// 	public ngOnInit() {
// 		let me: any  = this;
// 		if (me.rootElement.childElementCount === 0 ) {
// 			let o: any = {
// 				xtype: me.xtype,
// 				renderTo: me.rootElement
// 			};
// 			//if (me.fit === true ) {o.plugins = ['fittoparent']; } else {o.height = 300; };
// 			o.listeners = me.listeners;
// 			if (me.title !== {} ) {o.title = me.title; };
// 			if (me.topAxis !== {} ) {o.topAxis = me.topAxis; };
// 			if (me.leftAxis !== {} ) {o.leftAxis = me.leftAxis; };
// 			if (me.aggregate !== {} ) {o.aggregate = me.aggregate; };
// 			o.store = me.store;
// 			if (me.config !== {} ) {
// 				Ext.apply(o, me.config);
// 			};
// 			me.extjsObject = Ext.create(o);
// 			me.ready.next(me);
// 		}
// 	}

// }
