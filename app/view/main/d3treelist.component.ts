import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';

@Component({
  selector: '',
	template: `
		<extjs [xtype]='"d3-treemap"' 
			[config]='d3Config' 
		></extjs>
	`
})
export class D3TreeListComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private d3Config: any = {};

	constructor () {

		this.d3Config = {
			//left: 10, top: 10,
			//style: { width: '300px', height: '300px' },
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			shadow: true,

			zoom: {
				doubleTap: false
			},
			store: {
				type: 'tree',
				fields: [
					'name',
					'description',
					'cap',
					{
						name: 'leaf',
						calculate: function (data) {
								return data.root ? false : !data.children;
						}
					},
					{
						name: 'change',
						calculate: function () {
								return (-5 + Math.random() * 10).toFixed(2); // percentages
						}
					},
					{
						name: 'expanded',
						type: 'boolean',
						defaultValue: true
					}
				],
				proxy: {
					type: 'ajax',
					url: 'data/stocksSmall.json'
				},
				autoLoad: true
			},
			rootVisible: false,
			selectEventName: null,
			expandEventName: null,
			nodeValue: function (node) {
				return node.data.cap;
			},
			tooltip: {
				cls: 'tip',
				renderer: function (component, tooltip, node, element, event) {
					//console.log(node);
					//console.log(element);
					var parentTpl:any = [
							'<div class="tip-title">{data.name}</div>',
							'<tpl for="childNodes">',
							'<div><span class="tip-symbol">{data.name}</span><tpl if="data.description"> - {data.description}</tpl></div>',
							'<tpl if="xindex &gt; 10">...{% break; %}</tpl>',
							'</tpl>'
					];

					var leafTpl:any = [
							'<div class="tip-company">{data.description}</div>',
							'<div>Change:&nbsp;<tpl if="data.change &gt; 0">+</tpl>{data.change}%</div>'
					];
					// var view = this.getView(),
					// 		tpl = view.lookupTpl(node.isLeaf() ? 'leafTpl' : 'parentTpl'),
					// 		html;
					var html:any;
					//component.setSelection(node);
					//html = parentTpl.apply(node);
					//tooltip.setHtml(html);
				}
			},
			colorAxis: {
				scale: {
					type: 'linear',
					domain: [-5, 0, 5],
					range: ['#E45649', '#ECECEC', '#50A14F']
				},
				field: 'change',
				processor: function (axis, scale, node, field) {
					return node.isLeaf() ? scale(node.data[field]) : '#ececec';
				}
			}
		}
	}
}
