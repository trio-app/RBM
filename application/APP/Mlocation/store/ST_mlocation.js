Ext.define('RBM.model.M_mlocation',{
    extend: 'Ext.data.Model',
    fields: ['d_id', 'm_name', 'd_name', 'd_description']
});
Ext.define('RBM.store.ST_mlocation',{
    extend: 'Ext.data.Store',
    model: 'RBM.model.M_mlocation',
    autoLoad:true,
    autoSync: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: base_url + 'Mlocation/read'
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