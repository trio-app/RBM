Ext.define('RBM.Mlocation.view.FRM_mlocation',{
   extend: 'Ext.form.Panel',
   alias: 'widget.FRM_mlocation',
   frame: false,
   border: 0,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Location</p>',
        },{
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
            name: 'd_name',
            flex: 1,
            fieldLabel: 'Location Name',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'd_description',
            flex: 1,
            fieldLabel: 'Location Desc',
            labelAlign: 'top',
            allowBlank: false
        }]
}],
    buttons: [{
        text: 'Save',
        action: 'add'
    },{
        text    : 'Reset',
        handler : function () { 
            var frm = this.up('panel');
            frm.down('form').getForm().reset(); 
            frm.setAction('add');
        }
    }]  
});