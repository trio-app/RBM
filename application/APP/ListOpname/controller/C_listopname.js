Ext.define('RBM.ListOpname.controller.C_listopname',{
    extend: 'Ext.app.Controller',
    views: ['RBM.ListOpname.view.GRID_listopname'],
    stores: ['RBM.ListOpname.store.ST_listopname'],
     refs: [{
        ref: 'GRID_listopname',
        xtype: 'GRID_listopname',
        selector: 'GRID_listopname',
        autoCreate: true
    }],     
    init: function(){
        this.control({
            
                'WMCategory > toolbar > textfield[itemId=searchData]': {
                 specialkey: this.searchData
              }
        });
    },
        searchData: function(f,e){
            
            var store = Ext.getStore('RBM.ListOpname.store.ST_listopname');
            if (e.getKey() == e.ENTER) {
                store.remoteFilter = false;
                store.clearFilter();
                store.remoteFilter = true;
                store.filter([{
                        property:'filtername',
                        anyMatch: true,
                        value   : f.value
                    } ]);
            }
        },
    
});