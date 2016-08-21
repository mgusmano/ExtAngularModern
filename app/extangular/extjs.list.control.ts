import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSListEvents {
	public static XTYPE: string = 'list';
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSListEvents);

@Component({
  selector: 'extjs-' + ExtJSListEvents.XTYPE,
	inputs: [ 'config'],
	outputs: ExtJSListEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSListControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSListEvents);
	}
}
