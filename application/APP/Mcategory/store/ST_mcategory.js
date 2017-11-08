Ext.define('RBM.Mcategory.model.M_mcategory',{
    extend: 'Ext.data.Model',
    fields: ['d_id', 'm_name', 'd_name', 'd_description']
});
Ext.define('RBM.Mcategory.store.ST_mcategory',{
    extend: 'Ext.data.Store',
    model: 'RBM.Mcategory.model.M_mcategory',
    autoLoad:true,
    autoSync: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: base_url + 'Mcategory/read'
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