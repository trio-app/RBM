<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP',
        controllers: ['RBM.Mgroup.controller.C_mgroup'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mgroup',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_mgroup'}]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_mgroup'}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_mgroup"> </div>