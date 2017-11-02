<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP/Mlocation',
        controllers: ['C_mlocation'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mlocation',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_mlocation'}]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_mlocation'}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_mlocation"> </div>