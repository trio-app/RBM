Ext.define('RBM.model.M_mrackbin',{
    extend: 'Ext.data.Model',
    fields: ['rack_id', 'rack_name', 'location_name', 'rack_description']
});
Ext.define('RBM.store.ST_mrackbin',{
    extend: 'Ext.data.Store',
    model: 'RBM.model.M_mrackbin',
    autoLoad:true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: base_url + 'Mrackbin/read'
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