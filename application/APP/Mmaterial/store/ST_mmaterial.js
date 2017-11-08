Ext.define('RBM.Mmaterial.model.M_mmaterial',{
    extend: 'Ext.data.Model',
    fields: ['mat_id', 'mat_sapcode', 'mat_sapname', 'mat_sku', 'mat_skuname', 'mat_group' ,'mat_category','mat_uom','mat_upp']
});
Ext.define('RBM.Mmaterial.store.ST_mmaterial',{
    extend: 'Ext.data.Store',
    alias: 'store.ST_mmaterial',
    model: 'RBM.Mmaterial.model.M_mmaterial',
    autoLoad:true,
    autoSync: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: base_url + 'Mmaterial/read'
        },
        reader: {
            type: 'json',
            root: 'Rows',
            totalProperty: 'TotalRows',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }        
    }
    
});