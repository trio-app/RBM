Ext.define('RBM.controller.C_toutbound',{
    extend: 'Ext.app.Controller',
    views: ['TAB_toutbound', 'FRM_toutbound', 'GRID_toutbound', 'GRID_outmaterial'],
    //stores: ['ST_tinbound'],
    refs: [{
        ref: 'FRM_toutbound',
        xtype: 'FRM_toutbound',
        selector: 'FRM_toutbound',
        autoCreate: true
    },{
        ref: 'GRID_outmaterial',
        xtype: 'GRID_outmaterial',
        selector: 'GRID_outmaterial',
        autoCreate: true
    },{
        ref: 'GRID_toutbound',
        xtype: 'GRID_toutbound',
        selector: 'GRID_toutbound',
        autoCreate: true
    }],    
    init: function(){
        this.control({
            'GRID_toutbound > toolbar > button[action=addmaterial]' :{
                click: this.showAddForm
                    //alert('test');
            }
        });
    },
    showAddForm: function(){
	var win = this.getGRID_outmaterial();
	win.show();
        //alert('test');
    }
    
});