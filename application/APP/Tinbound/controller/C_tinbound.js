Ext.define('RBM.Tinbound.controller.C_tinbound',{
    extend: 'Ext.app.Controller',
    views: [
        'RBM.Tinbound.view.TAB_tinbound', 
        'RBM.Tinbound.view.FRM_tinbound', 
        'RBM.Tinbound.view.GRID_tinbound',
        'RBM.Tinbound.view.GRID_inmaterial',
        // include material grid
        'RBM.Mmaterial.view.GRID_mmaterial'],
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
    init: function(){
        this.control({
            'GRID_tinbound > toolbar > button[action=addmaterial]' : {
                click: this.addMaterial
            },
            'GRID_mmaterial' :{
                itemdblclick: this.onRowdblclick
            }
        });
    },
    addMaterial: function(){
        var win = this.getGRID_inmaterial();
        win.show();        
    },
    onRowdblclick: function(me, record, item, index){                            
        var grid = this.getGRID_tinbound();
        var win = this.getGRID_inmaterial();
        var recordIndex = grid.store.findBy(function(data, id){
           //console.log(data.get('mat_sapcode')); 
           if(record.data.mat_sapcode == data.get('mat_sapcode')){
               return true;
           }
           return false;
        });
        
        if(recordIndex != -1){
             Ext.MessageBox.confirm('Confirmation', 'Material / Item sudah Ada. Ingin menambahkan kembali ?', function(btn){
                if(btn == 'yes'){
                    grid.store.add({
                        mat_sapcode : record.data.mat_sapcode,
                        mat_sapname : record.data.mat_sapname,
                        mat_uom : record.data.mat_uom,
                        mat_upp : record.data.mat_upp,
                        mat_stock : '1',
                        mat_barcode : '1'
                    });
                }else{
                   alert('data sudah ada');
                }
             });
        }else{
            grid.store.add({
                mat_sapcode : record.data.mat_sapcode,
                mat_sapname : record.data.mat_sapname,
                mat_uom : record.data.mat_uom,
                mat_upp : record.data.mat_upp,
                mat_stock : '1',
                mat_barcode : '1'
            });
        }
        //console.log(grid.store.getRange());
        win.close();

    },
    
});