Ext.define('RBM.Mcategory.view.FRM_mcategory',{
   extend: 'Ext.form.Panel',
   alias: 'widget.FRM_mcategory',
   frame: false,
   border: 0,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Category</p>',
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
            fieldLabel: 'Category Name ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'd_description',
            flex: 1,
            fieldLabel: 'Category Desc ',
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
