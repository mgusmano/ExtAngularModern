import { Component, OnInit, ElementRef } from '@angular/core';
import { ExtJSBase } from './extjs.base';

export class ExtJSDataViewEvents {
	public static XTYPE: string = 'dataview';
	public static EVENTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'selectionchange', parameters: 'control,record,eOpts' },
		{ name: 'itemmouseenter', parameters: 'control,index,target,record,e,eOpts' },
		{ name: 'itemmouseleave', parameters: 'control,index,target,record,e,eOpts' },
	];
	public static EVENTNAMES: string[] = [];
}
ExtJSBase.iterateIt(ExtJSDataViewEvents);

@Component({
  selector: 'extjs-' + ExtJSDataViewEvents.XTYPE,
	inputs: [ 'config'],
	outputs: ExtJSDataViewEvents.EVENTNAMES.concat('ready'),
	template: ``
})
export class ExtJSDataViewControl  extends ExtJSBase implements OnInit {
	constructor(myElement: ElementRef) {
		super(myElement, ExtJSDataViewEvents);
	}
}
