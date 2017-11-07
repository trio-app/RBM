<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP/Toutbound',
        controllers: ['C_toutbound'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_toutbound',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '0 5 5 5',
                    items:[{xtype: 'TAB_toutbound'}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_toutbound"> </div>