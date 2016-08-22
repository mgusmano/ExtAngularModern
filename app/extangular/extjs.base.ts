/// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
import { ElementRef, EventEmitter } from '@angular/core';

export abstract class ExtJSBase {
	public extjsObject: any;
	private rootElement: any;
	private listeners = {};
	private xtype: string;
	private inputs: any;

	static iterateIt(ExtJSEvents) {
		for (var key in ExtJSEvents.EVENTS) {
			var value = ExtJSEvents.EVENTS[key].name;
			ExtJSEvents.EVENTNAMES.push(value);
		}
	}

	//constructor(myElement: ElementRef, @Attribute('fit') fit: any) {
	constructor(myElement: ElementRef, Events: any) {
		this.xtype = Events.XTYPE;
		this.inputs = Events.INPUTS;
		this.rootElement = myElement.nativeElement;
		let me = this;
		this['ready'] = new EventEmitter();
		Events.EVENTS.forEach( (event, n) => {
			(<any>this)[event.name] = new EventEmitter();
			this.listeners[event.name] = function() {
					let parameters = event.parameters;
					let parms = parameters.split(',');
					let args = Array.prototype.slice.call(arguments);
					let o: any = {};
					for (let i = 0, j = parms.length; i < j; i++ ) {
						//if (parms[i] !== 'eOpts') {
							o[parms[i]] = args[i];
						//}
					}
					me[event.name].next(o);
			};
		});
	}

	public ngOnInit() {
		let me: any  = this;
		if (me.rootElement.childElementCount === 0 ) {
			let o: any = {
				xtype: me.xtype,
				renderTo: me.rootElement
			};
			o.listeners = me.listeners;
			if (me.inputs != undefined) {
				for (var i = 0; i < me.inputs.length; i++) { 
					var s = me.inputs[i];
					if (me[s] != undefined ) { 
						o[s] = me[s]; 
					};
				}
			}
			if (me.config !== {} ) {
				Ext.apply(o, me.config);
			};
			me.extjsObject = Ext.create(o);
			me.ready.next(me);
		}
	}
}
