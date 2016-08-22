import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSGridEvents {
	public static XTYPE: string = 'grid';
		public static INPUTS = [
		'title',
		'columns',
		'selModel',
		'plugins',
		'store'
	];
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'columnsort', parameters: 'control,column,direction,eOpts' },
		{ name: 'selectionchange', parameters: 'this,selected,eOpts' },
		{ name: 'beforecellclick', parameters: 'this,td,cellIndex,record,tr,rowIndex,e,eOpts' },
		{ name: 'enable', parameters: 'this,eOpts' },
		{ name: 'headerclick', parameters: 'ct,column,e,t,eOpts' }
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSGridEvents);

@Component({
  selector: 'extjs-' + ExtJSGridEvents.XTYPE,
	inputs: ExtJSGridEvents.INPUTS.concat('config'),
	outputs: ExtJSGridEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSGridControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSGridEvents);
	}
}
