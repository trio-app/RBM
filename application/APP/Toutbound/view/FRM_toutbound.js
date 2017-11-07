Ext.define('RBM.view.FRM_toutbound',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_toutbound',
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
            fieldLabel: 'Outbound Date ',
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
            xtype: 'textarea',
            flex: 1,
            fieldLabel: 'Remark',
            allowBlank: false,
            minLength: 3
        }]
    }]     
});
