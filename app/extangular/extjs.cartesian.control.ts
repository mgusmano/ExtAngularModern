import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSCartesianEvents {
	public static XTYPE: string = 'cartesian';
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'columnsort', parameters: 'control,column,direction,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSCartesianEvents);

@Component({
  selector: 'extjs-' + ExtJSCartesianEvents.XTYPE,
	inputs: [ 'config' ],
	outputs: ExtJSCartesianEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSCartesianControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSCartesianEvents);
	}
}
