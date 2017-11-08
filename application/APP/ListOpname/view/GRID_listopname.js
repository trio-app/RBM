                    Ext.define('RBM.ListOpname.view.GRID_listopname',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.GRID_listopname',
                        id: 'GRID_listopname',
                        height: 500,
                        frame:true,
                        border: 2,
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
                            this.tbar= [
                                '->',
                                    {
                                        xtype: 'textfield',
                                        itemId:'searchData',
                                        emptyText: 'Search Data',
                                        fieldStyle: 'text-align: left;align:right;'
                                    }    
                            ];
                            this.columns= [
                                {xtype: 'rownumberer'},
                                {header: 'Matrial Code', dataIndex: 'mat_sapcode', sortable: false},
                                {header: 'Material Name', dataIndex: 'mat_sapname', flex: 1, sortable: false},
                                {header: 'Unit', dataIndex: 'mat_uom', sortable: false},
                                {header: 'QTY', dataIndex: 'matqtytotal', xtype: 'numbercolumn', sortable: false,
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
                            this.bbar = Ext.create('Ext.PagingToolbar', {
                            store: '',
                            displayInfo: true,
                            displayMsg: 'Total Data {0} - {1} of {2}',
                            emptyMsg: "No Data Display"
                            });
                         this.callParent(arguments);
                        }/*,
                        getSelected: function () {
                             var sm = this.getSelectionModel();
                             var rs = sm.getSelection();
                             if (rs.length) {
                                 return rs[0];
                             }
                             return null;
                         } */                       
                    });