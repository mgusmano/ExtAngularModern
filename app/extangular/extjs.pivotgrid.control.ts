import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSPivotGridEvents {
	public static XTYPE: string = 'pivotgrid';
	public static INPUTS = [
		'title',
		'matrix'
	];
	public static EVENTS = [
		{ name: 'select', parameters: 'pivotgrid,record,eOpts' },
		{ name: 'pivotdone', parameters: 'matrix,eOpts' },
		{ name: 'pivotgroupcellclick', parameters: 'params,e,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSPivotGridEvents);

@Component({
  selector: 'extjs-' + ExtJSPivotGridEvents.XTYPE,
	inputs: ExtJSPivotGridEvents.INPUTS.concat('config'),
	outputs: ExtJSPivotGridEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSPivotGridControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSPivotGridEvents);
	}
}
