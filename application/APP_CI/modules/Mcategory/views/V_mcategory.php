<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RBM',
        appFolder: 'application/APP/Mcategory',
        controllers: ['C_mcategory'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mcategory',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/3,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_mcategory'}]
                    },{
                    columnWidth: 2/3,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_mcategory'}]
                    }]
                
            });
        }
});    
    
    
    //});

    
</script>
<div id="ID_mcategory"> </div>