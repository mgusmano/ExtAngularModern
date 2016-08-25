import { Component } from '@angular/core';
import { AgencyStore } from '../../store/agency.store';

@Component({
  selector: '',
	styles: [`

.x_panel {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 17px;
    display: inline-block;
    background: #fff;
    border: 1px solid #E6E9ED;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
    opacity: 1;
    transition: all .2s ease;
}
.tile {
    overflow: hidden;
}
.fixed_height_320 {
    height: 320px;
}

@media (max-width: 1200px)
.x_title h2 {
    width: 62%;
    font-size: 17px;
		box-sizing: border-box;
}
h2 {
    font-size: 16px;
    font-weight: 400;
}

@media (min-width: 768px)
.navbar-right {
    float: right!important;
    margin-right: -15px;
}
.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.panel_toolbox {
    float: right;
    min-width: 70px;
}




.x_title {
    border-bottom: 2px solid #E6E9ED;
    padding: 1px 5px 3px;
    margin-bottom: 5px;
		font-size: 12px;
}

	.home-panel {
		position:relative;
		padding: 0;
		margin: 0;
		border-radius: 0;
		background-color: #FFF;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.2),0 0 2px 0 rgba(0,0,0,.12);
		box-shadow: 0px 5px 10px -6px black;
	}
.home-panel-title {
	border-bottom: 1px solid #E6E9ED;
	margin:0;
	left:0;
	width:100%;
	height:40px;
	background:linear-gradient(to bottom right, gray 0%, white 100%);
	color:white;
	padding-left:15px;
	padding-top:5px;
	padding-bottom:10px;
}
	`],
	template: `
		<div style="margin:20px;">


<div class="row" style="height:300px">

	<div class="col-md-4 col-sm-4 col-xs-12">
		<div class="home-panel" style="height:280px">
			<div class="home-panel-title">Agency List</div>
			<extjs-list [config]='listConfig'></extjs-list>
		</div>
	</div>

	<div class="col-md-4 col-sm-4 col-xs-12">
		<div class="home-panel" style="height:280px">
			<div class="home-panel-title">Agency List</div>
			<extjs-list [config]='listConfig'></extjs-list>
		</div>
	</div>

	<div class="col-md-4 col-sm-4 col-xs-12">
		<div class="home-panel" style="height:280px">
			<div class="home-panel-title">Agency List</div>
			<extjs-list [config]='listConfig'></extjs-list>
		</div>
	</div>

</div>

<div class="row" >
	
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="home-panel" style="height:300px;">
			<div class="home-panel-title">Agency List</div>
			<extjs-cartesian [config]='cartesianConfig'></extjs-cartesian>
		</div>
	</div>

	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="home-panel" style="height:300px">
			<div class="home-panel-title">Agency List</div>
			<extjs-list [config]='listConfig'></extjs-list>
		</div>
	</div>

</div>
	`
})
export class HomeComponent { 

		cartesianConfig:any = {
			left: 0, top: 40,
			style: { width: '100%', height: 'calc(100% - 40px)' },
			store: {
					fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
					data: [
							{'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
							{'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
							{'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
							{'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
							{'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
					]
			},
			series: [
				{
					type: 'bar',
					xField: 'name',
					yField: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
					title: ['Apples', 'Oranges', 'Bananas', 'Plums', 'Mangos', 'Pears'],
					stacked: false,
					style: { lineWidth: 2 }
				}
			],
			axes: [
				{
					type: 'numeric',
					position: 'left',
					fields: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
					label: {
							rotate: {
									degrees: -30
							}
					}
				}, 
				{
					type: 'category',
					position: 'bottom',
					fields: 'name'
				}
			]
		};

		listConfig: any = { 
			left: 0, top: 40,
			style: { width: '100%', height: 'calc(100% - 40px)' },
			store: new AgencyStore().extjsObject,
			itemTpl: '{agencyCode} - {agencyName} ({agencyAbbreviation})',
		};


}
