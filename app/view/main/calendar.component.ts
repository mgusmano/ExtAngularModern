import { Component } from '@angular/core';
//import { CompanyStore } from '../../store/company.store';

@Component({
  selector: '',
	template: `
		<extjs [xtype]='"calendar"' 
			[config]='calendarConfig' 
		></extjs>
	`
})
export class CalendarComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	calendarConfig: any = { 
		left: this.border, top: this.border,
		style: { width: this.size, height: this.size },
		shadow: true,
		views: {
				day: {
						startTime: 6,
						endTime: 22
				},
				workweek: {
						xtype: 'calendar-week',
						controlStoreRange: false,
						titleTpl: '{start:date("j M")} - {end:date("j M")}',
						label: 'Work Week',
						weight: 15,
						dayHeaderFormat: 'D d',
						firstDayOfWeek: 1,
						visibleDays: 5
				}
		},
		timezoneOffset: 0,
		// store: {
		// 		autoLoad: true,
		// 		proxy: {
		// 				type: 'ajax',
		// 				url: '/KitchenSink/CalendarFull'
		// 		}
		// },
		// store: new CompanyStore({}).extjsObject
	};

}
