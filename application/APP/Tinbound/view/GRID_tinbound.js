Ext.define('RBM.Tinbound.view.GRID_tinbound',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_tinbound',
    id: 'GRID_tinbound',
    height: 250,
    border: 0,
    store: Ext.create('Ext.data.ArrayStore',{
        fields: [
            'mat_sapcode', 
            'mat_sapname', 
            'mat_uom', 
            'mat_upp', 
            'mat_stock', 
            {name : 'mat_barcode', type: 'float', 
                convert: function(val,row){
                    return Math.ceil(row.data.mat_stock / row.data.mat_upp);
                }
            }
        ],
        autoLoad: true,
        proxy: {
            type: 'memory'
        }
    }),
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToMoveEditor: 1,
                autoCancel: false,
                listeners: {
                    edit: function(editor, e){
                        e.record.commit();
                    }
                }
        })                            
    ],
    viewConfig : {
        listeners : {
        'itemkeydown' : function(view, record, item, index, key) {
            if (key.getKey() == 46) {//the delete button
                var selection = this.getSelectionModel().getSelection();
                var grid = this.up('grid');
                grid.store.remove(selection);
                //delete records
                }  
            }

        },
    },                        
    initComponent: function(){
        this.tbar= [{
            scale: 'large',
            text: '<h2 style="padding: 0; margin: 0;">Add Material</h2>',
            action: 'addmaterial',
            icon: base_url + 'system/img/add.ico'
        }];
        this.columns= [
            {xtype: 'rownumberer'},
            {header: 'Code', dataIndex: 'mat_sapcode', sortable: false},
            {header: 'Material Name', dataIndex: 'mat_sapname', flex: 1, sortable: false},
            {header: 'UOM', dataIndex: 'mat_uom', sortable: false},
            {header: 'UPP', dataIndex: 'mat_upp', xtype: 'numbercolumn', sortable: false,
                editor: {
                    xtype: 'numberfield',
                    minValue: 0,
                    allowBlank: false
                }
            },
            {header: 'QTY', dataIndex: 'mat_stock', xtype: 'numbercolumn', sortable: false,
                editor: {
                    xtype: 'numberfield',
                    minValue: 0,
                    allowBlank: false
                }                                
            },
            {header: 'Barcode', dataIndex: 'mat_barcode', xtype: 'numbercolumn', sortable: false,
                editor: {
                    xtype: 'numberfield',
                    minValue: 0,
                    allowBlank: false
                }                                
            },
        ];

        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Material / Item',
                handler: function () {
                    this.store.remove(this.getSelected());
                    //this.fireEvent('removeitem', this.getSelected())
                },
                scope: this,
                icon: extjs_url + 'resources/css/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.removeitem
            ]
        });
        this.on({
            itemcontextmenu: function (view, rec, node, index, e) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
                return false;
            }
        });                
        this.callParent(arguments);
    },
    getSelected: function () {
         var sm = this.getSelectionModel();
         var rs = sm.getSelection();
         if (rs.length) {
             return rs[0];
         }
         return null;
     }                        
})