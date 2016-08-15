Ext.define('Ext.overrides.Container', {
	override: 'Ext.Container',
	left: 100, top: 200,
	initialize: function ( component , eOpts ) {
		this.callParent();
		console.log(component);
	}
});