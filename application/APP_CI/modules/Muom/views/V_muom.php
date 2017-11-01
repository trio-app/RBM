<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP/Muom',
        controllers: ['C_muom'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_muom',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_muom'}]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_muom'}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_muom"> </div>