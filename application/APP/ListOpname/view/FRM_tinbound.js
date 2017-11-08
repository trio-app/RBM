Ext.define('RBM.view.FRM_tinbound',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_tinbound',
    frame: false,
    border: 0,
    config: {
            recordIndex: 0,
            action: ''
    },   
    items: [{
        xtype: 'form',
        border: 0,
        layout: 'anchor',
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [{
            readOnly: true,
            xtype: 'hidden',
            name: 'd_id',
            fieldLabel: 'ID'
        },{
            xtype: 'datefield',
            name: 'd_name',
            flex: 1,
            fieldLabel: 'Inbound Date ',
            allowBlank: false,
            minValue: Ext.Date.add(new Date(), Ext.Date.DAY, -3),
            editable: false,
            format: 'd-m-Y'
        },{
            name: 'd_description',
            flex: 1,
            fieldLabel: 'PO / Document Number ',
            allowBlank: false,
            minLength: 3,           
        },{
            xtype: 'combo',
            fieldLabel: 'Inbound Type',
            flex: 1,
            allowBlank: false,
            store: Ext.create('Ext.data.Store', {
                fields: ['typeid', 'typename'],
                data : [
                    {typeid:'1', typename:'RSA'},
                    {typeid:'0', typename:'SUPPLIER'}
                ]
            }),
            displayField: 'typename',
            valueField : 'typeid'         
        },{
            xtype: 'textarea',
            flex: 1,
            fieldLabel: 'Remark',
            allowBlank: false,
            minLength: 3
        }]
    }]     
});
