                    Ext.define('RBM.view.GRID_listopname',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.GRID_listopname',
                        id: 'GRID_listopname',
                        height: 250,
                        border: 0,
                       /* plugins: [
                            Ext.create('Ext.grid.plugin.RowEditing', {
                                    clicksToMoveEditor: 1,
                                    autoCancel: false,
                                    listeners: {
                                        edit: function(editor, e){
                                            e.record.commit();
                                            var records = Ext.getStore('InboundSelectedStore').getRange();
                                            console.log(records);
                                        }
                                    }
                            })                            
                        ],
                        viewConfig : {
                            listeners : {
                            'itemkeydown' : function(view, record, item, index, key) {
                                if (key.getKey() == 46) {//the delete button
                                    var selection = this.getSelectionModel().getSelection();
                                    Ext.getStore('InboundSelectedStore').remove(selection);
                                    //delete records
                                    }  
                                }

                            }
                        }, */                       
                        initComponent: function(){
                            this.tbar= [{
                                text: 'Add Material',
                                action: 'addmaterial',
                                icon: base_url + 'system/images/icons/drop-add.gif'
                            }];
                            this.columns= [
                                {xtype: 'rownumberer'},
                                {header: 'Matrial Code', dataIndex: 'mat_sapcode', sortable: false},
                                {header: 'Material Name', dataIndex: 'mat_sapname', flex: 1, sortable: false},
                                {header: 'Unit', dataIndex: 'mat_uom', sortable: false},
                                {header: 'QTY', dataIndex: 'mat_stock', xtype: 'numbercolumn', sortable: false,
                                    editor: {
                                        xtype: 'numberfield',
                                        minValue: 0,
                                        allowBlank: false
                                    }                                
                                },
                                {header: 'Qty Barcode(system)',dataIndex: 'matbarcode', flex: 1},
                                {header: 'QTY (Scan)',dataIndex: '', flex: 1},
                                {header: 'Qty Barcode (Scan)',dataIndex: '', flex: 1}
                            ];    
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