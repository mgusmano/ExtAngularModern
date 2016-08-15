import { Component, OnInit } from '@angular/core';
import {ExtJSClass} from '../extangular/extjs.class';





export class WidgetStore extends ExtJSClass implements OnInit  {
  ngOnInit() {
		console.log('OnInit');
  }

	constructor (createConfig: any) {
		console.log('constructor');
		let className: any = 'WidgetStore';
		let extend: any = 'Ext.data.ArrayStore';

		let defineConfig: any = {
			fields: [
				{name: 'name'},
				{name: 'progress', type: 'float'},
				'sequence1',
				'sequence2',
				'sequence3',
				'sequence4',
				'sequence5',
				'sequence6',
				'sequence7'
			],

			data: (function() {
					var result = [],
							i;
					for (i = 0; i < 8; i++) {
							result.push([i + 1, 'Record ' + (i + 1), Ext.Number.randomInt(0, 100) / 100, generateSequence(), generateSequence(), generateSequence(), generateSequence(20, 1, 10), generateSequence(4, 10, 20), generateSequence(), generateSequence(20, -1, 1)]);
					}
					return result;
			})()
		};
		super(className, extend, defineConfig, createConfig);
		return;
	}



}

