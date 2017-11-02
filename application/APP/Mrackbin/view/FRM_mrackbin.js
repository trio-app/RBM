Ext.define('RBM.view.FRM_mrackbin',{
   extend: 'Ext.form.Panel',
   alias: 'widget.FRM_mrackbin',
   frame: false,
   border: 0,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Rack Bin</p>',
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
            name: 'rack_id',
            fieldLabel: 'ID'
        },{
            xtype: 'container',
            layout: 'hbox',
            margin : '5 0',
            items :[{
                xtype: 'combo',
                id : 'Rack_location',
                flex: 1,
                name: 'location_name',
                displayField: 'd_name',
                valueField :'d_name',
                editable: false,
                fieldLabel: 'Rack Location',
                labelAlign: 'top',
                allowBlank: false,
                queryMode:'local',
                store: new Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: ['d_name'],
                    proxy: {
                        actionMethods: 'POST',
                        type: 'ajax',
                        url: base_url + 'Mlocation/cbolist',
                        reader: {
                            type: 'json'
                        }
                    }                             
                }), 
            },{
                margin: '17 0 0 5',
                xtype: 'button',
                tooltip: 'Update List',
                icon: extjs_url + 'resources/ext-theme-classic/images/grid/refresh.gif',
                handler: function(){
                    refresh();
                }
            }]                 
        },{
            name: 'rack_name',
            flex: 1,
            fieldLabel: 'Rack Bin Name',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'rack_description',
            flex: 1,
            fieldLabel: 'Rack Bin Desc',
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

function refresh(){
    //Reset Combobox
    
    Ext.getCmp('Rack_location').store.reload();
    Ext.getCmp('Rack_location').clearValue();
    
}