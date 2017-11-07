<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP/Tinbound',
        controllers: ['C_tinbound'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_tinbound',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '5',
                    items:[{xtype: 'TAB_tinbound'}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_tinbound"> </div>