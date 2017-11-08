Ext.define('RBM.ListOpname.controller.C_listopname',{
    extend: 'Ext.app.Controller',
    views: ['RBM.ListOpname.view.GRID_listopname'],
    //stores: ['ST_listopname'],
     refs: [{
        ref: 'GRID_listopname',
        xtype: 'GRID_listopname',
        selector: 'GRID_listopname',
        autoCreate: true
    }],     
    init: function(){
        this.control({

        });
    }
    
});