import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSGridEvents {
	public static XTYPE: string = 'grid';
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'columnsort', parameters: 'control,column,direction,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSGridEvents);

@Component({
  selector: 'extjs-' + ExtJSGridEvents.XTYPE,
	inputs: [ 'config'],
	outputs: ExtJSGridEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSGridControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSGridEvents);
	}
}
