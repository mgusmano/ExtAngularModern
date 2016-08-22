import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSViewPortEvents {
	public static XTYPE: string = 'viewport';
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'columnsort', parameters: 'control,column,direction,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSViewPortEvents);

@Component({
  selector: 'extjs-' + ExtJSViewPortEvents.XTYPE,
	inputs: [ 'config'],
	outputs: ExtJSViewPortEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSViewPortControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSViewPortEvents);
	}
}
