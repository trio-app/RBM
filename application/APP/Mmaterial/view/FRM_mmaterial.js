Ext.define('RBM.Mmaterial.view.FRM_mmaterial',{
   extend: 'Ext.form.Panel',
   alias: 'widget.FRM_mmaterial',
   frame: false,
   border: 0,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Material</p>',
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
            name: 'mat_id',
            fieldLabel: 'ID'
        },{
            name: 'mat_sapcode',
            flex: 1,
            fieldLabel: 'SAP Code ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'mat_sapname',
            flex: 1,
            fieldLabel: 'SAP Name ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'mat_sku',
            flex: 1,
            fieldLabel: 'Material SKU ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'mat_skuname',
            flex: 1,
            fieldLabel: 'Material Name ',
            labelAlign: 'top',
            allowBlank: false
        },{
            xtype: 'container',
            layout: 'hbox',
            margin : '5 0',
            items :[{
                xtype: 'combo',
                id : 'Material_group',
                flex: 1,
                name: 'mat_group',
                displayField: 'd_name',
                valueField :'d_name',
                editable: false,
                fieldLabel: 'Material Group',
                labelAlign: 'top',
                allowBlank: false,
                queryMode:'local',
                store: new Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: ['d_name'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Mgroup/cbolist',
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
            xtype: 'container',
            layout: 'hbox',
            margin : '5 0',
            items :[{
                xtype: 'combo',
                id : 'Material_category',
                flex: 1,
                name: 'mat_category',
                displayField: 'd_name',
                valueField :'d_name',
                editable: false,
                fieldLabel: 'Material Category',
                labelAlign: 'top',
                allowBlank: false,
                queryMode:'local',
                store: new Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: ['d_name'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Mcategory/cbolist',
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
            xtype: 'container',
            layout: 'hbox',
            margin : '5 0',
            items :[{
                xtype: 'combo',
                id : 'Material_uom',
                flex: 1,
                name: 'mat_uom',
                displayField: 'd_name',
                valueField :'d_name',
                editable: false,
                fieldLabel: 'Material UOM',
                labelAlign: 'top',
                allowBlank: false,
                queryMode:'local',
                store: new Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: ['d_name'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Muom/cbolist',
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
            xtype: 'numberfield',
            name: 'mat_upp',
            flex: 1,
            fieldLabel: 'Material UPP ',
            labelAlign: 'top',
            allowBlank: false,
            minValue: 0
        }]
}],
    buttons: [{
        text: 'Save',
        action: 'add'
    },{
        text    : 'Reset',
        handler : function () { 
            //Reset Form
            var frm = this.up('panel');
            frm.down('form').getForm().reset();
            frm.setAction('add');
            refresh();
        }
    }]  
});

function refresh(){
    //Reset Combobox
    Ext.getCmp('Material_group').store.reload();
    Ext.getCmp('Material_group').clearValue();
    
    Ext.getCmp('Material_category').store.reload();
    Ext.getCmp('Material_category').clearValue();
    
    Ext.getCmp('Material_uom').store.reload();
    Ext.getCmp('Material_uom').clearValue();
    
}