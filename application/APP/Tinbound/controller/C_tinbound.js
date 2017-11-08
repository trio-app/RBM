Ext.define('RBM.Tinbound.controller.C_tinbound',{
    extend: 'Ext.app.Controller',
    views: [
        'RBM.Tinbound.view.TAB_tinbound', 
        'RBM.Tinbound.view.FRM_tinbound', 
        'RBM.Tinbound.view.GRID_tinbound',
        'RBM.Tinbound.view.GRID_inmaterial',
        
        'RBM.Mmaterial.view.GRID_mmaterial'],
    //requires: 'RBM.Mmaterial.store.ST_mmaterial',
    stores: [
       // 'RBM.Mmaterial.store.ST_mmaterial'
    ],
    refs: [{
            ref: 'GRID_tinbound',
            xtype: 'GRID_tinbound',
            selector: 'GRID_tinbound',
            autoCreate: true
    },{
            ref: 'GRID_inmaterial',
            xtype: 'GRID_inmaterial',
            selector: 'GRID_inmaterial',
            autoCreate: true
    }],
    /* refs: [{
        ref: 'FRM_tinbound',
        xtype: 'FRM_tinbound',
        selector: 'FRM_tinbound',
        autoCreate: true
    }], */    
    init: function(){
        this.control({
            'GRID_tinbound > toolbar > button[action=addmaterial]' : {
                click: this.addMaterial
            }
        });
    },
    addMaterial: function(){
        var win = this.getGRID_inmaterial();
        win.show();        
    }
    
});