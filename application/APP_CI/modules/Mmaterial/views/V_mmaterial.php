<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP',
        controllers: ['RBM.Mmaterial.controller.C_mmaterial'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mmaterial',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_mmaterial'}]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_mmaterial', store: Ext.create('RBM.Mmaterial.store.ST_mmaterial')}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_mmaterial"> </div>