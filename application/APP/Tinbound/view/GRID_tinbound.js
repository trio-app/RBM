                    Ext.define('RBM.view.GRID_tinbound',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.GRID_tinbound',
                        id: 'GRID_tinbound',
                        height: 250,
                        border: 0,
                        plugins: [
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