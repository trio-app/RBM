Ext.define('RBM.Mgroup.model.M_mgroup',{
    extend: 'Ext.data.Model',
    fields: ['d_id', 'm_name', 'd_name', 'd_description']
});
Ext.define('RBM.Mgroup.store.ST_mgroup',{
    extend: 'Ext.data.Store',
    model: 'RBM.Mgroup.model.M_mgroup',
    autoLoad:true,
    autoSync: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: base_url + 'Mgroup/read'
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