<script>
    //Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name:'RBM',
        appFolder:'application/APP/ListOpname',
        controllers:['C_listopname'],
        launch: function(){
            Ext.create('Ext.container.Container',{
                layout:'column',
                margin:'5',
                autoScroll:true,
                rebderTo:'ID_listopname',
                defaultType: 'container',
                items:[
                    {
                        columnWidth:1/1,
                        padding:'0 5 5 5',
                        items:[{xtype:'GRID_listopname'}]
                    }
                  ]
                  
            });
        }
       
    });    
            
        
   // });
    
</script>
<div id="ID_listopname"></div>