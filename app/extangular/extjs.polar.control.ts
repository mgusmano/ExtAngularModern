import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSPolarEvents {
	public static XTYPE: string = 'polar';
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSPolarEvents);

@Component({
  selector: 'extjs-' + ExtJSPolarEvents.XTYPE,
	inputs: [ 'config' ],
	outputs: ExtJSPolarEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSPolarControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSPolarEvents);
	}
}
