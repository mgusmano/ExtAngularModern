import { Component } from '@angular/core';

@Component({
  selector: 'my-appM',
	template: `
		<div>
			<div class="top"><div class="header">Using Modern Toolkit Sencha Ext JS Controls in Angular2</div></div>
			<div class="left"><navigation></navigation></div>
			<div class="center"><router-outlet></router-outlet></div>
			<div class="bottom"><div class="footer">Copyright 2016 Sencha</div></div>
		</div>
	`
})
export class MainMComponent { 
}
