Ext.define('RBM.Tinbound.view.GRID_inmaterial',{
   extend: 'Ext.window.Window',
   alias: 'widget.GRID_inmaterial',
   title: 'Pilih Material / Item',
   width: 700,
   layout: 'fit',
   closeAction: 'hide',
   modal: true,
   items: [{
        xtype: 'GRID_mmaterial',
        frame: false,
        padding: 0,
        store: Ext.create('RBM.Mmaterial.store.ST_mmaterial'),
        height: 300
   }]
   
});
