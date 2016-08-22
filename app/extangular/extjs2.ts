import { Component, OnInit, Attribute, ElementRef, EventEmitter } from '@angular/core';
//import { ComponentUtil } from './componentUtil';

@Component({
  selector: 'extjs2',
	inputs: [ 'config'],
	//outputs: ComponentUtil.EVENTS,
	template: ``
})
export class ExtJS2 {
	public extjsObject: any;
	private rootElement: any;
	private xtype: string;

	constructor(myElement: ElementRef, @Attribute('xtype') xtype:string) {
		console.log(xtype);
		this.xtype = xtype;
		// ComponentUtil.EVENTS.forEach( (eventName) => {
		// 		(<any>this)[eventName] = new EventEmitter();
		// });
		this.rootElement = myElement.nativeElement;
	}

	public ngOnInit() {
		let me: any  = this;
		if (me.rootElement.childElementCount === 0) {
			let o: any = {
				xtype: me.xtype,
				renderTo: me.rootElement,
			};
			if (me.config !== {} ) {
				Ext.apply(o, me.config);
			}
			o.listeners = {};
			o.listeners['select'] = function(list, record, eOpts) {
				me.select.next({list: list, record: record, eOpts: eOpts});
			};
			me.extjsObject = Ext.create(o);
			me.ready.next(me);
		}
	}
}