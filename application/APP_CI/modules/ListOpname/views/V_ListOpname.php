<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP',
        controllers: ['RBM.ListOpname.controller.C_listopname'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_listopname',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '5',
                    items:[{xtype: 'GRID_listopname'}]
                    }]
                
            });
        }
});    
    
        
   // });
    
</script>
<div id="ID_listopname"></div>