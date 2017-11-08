Ext.define('RBM.ListOpname.model.M_listopname',{
    extend: 'Ext.data.Model',
    fields: ['in_id','in_type','ind_id','Rin_id','mat_codesap','mat_description','mat_uom','matqtytotal','mat_barcode','matbarcode']
});
Ext.define('RBM.ListOpname.store.ST_listopname',{
    extend: 'Ext.data.Store',
    model: 'RBM.ListOpname.model.M_listopname',
    autoLoad:true,
    autoSync: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: base_url + 'ListOpname/read'
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