Ext.define('RBM.view.GRID_outmaterial',{
                         extend: 'Ext.grid.Panel',
                         //id: 'SELECT_mmaterial',
                         alias: 'widget.GRID_outmaterial',
                         height: 300,
                         //store: 'ST_smmaterial',
                         initComponent: function () {
                             this.tbar = [
                                '->',
                                {
                                   xtype: 'textfield',
                                   itemId:'searchData',
                                   emptyText: 'Search Data',
                                   fieldStyle: 'text-align: left;align:right;'                                     
                                }
                             ]
                             this.columns = [
                                 { xtype: 'rownumberer' },
                                 { header: 'Code', dataIndex: 'mat_sapcode' },
                                 { header: 'Material Name', dataIndex: 'mat_sapname', flex: 1 },
                                 { header: 'UOM', dataIndex: 'mat_uom' },
                                 { header: 'UPP', dataIndex: 'mat_upp', xtype: 'numbercolumn' },
                             ];
                               this.bbar = Ext.create('Ext.PagingToolbar', {
                                 //store: 'ST_smmaterial',
                                 displayInfo: true,
                                 displayMsg: 'Total Data {0} - {1} of {2}',
                                 emptyMsg: "No Data Display"
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

                     });