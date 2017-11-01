Ext.define('RBM.view.GRID_mmaterial',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mmaterial',
    store: 'ST_mmaterial',
    margin: '10 0',
    height: 500,
    frame: true,
    initComponent: function(){
        this.tbar = [
          '->',
        {
            xtype: 'textfield',
            itemId:'searchData',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }    
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'SAP Code', dataIndex: 'mat_sapcode', locked: true},
            { header: 'SAP Name', dataIndex: 'mat_sapname', width: 200, locked: true},
            { header: 'Material SKU', dataIndex: 'mat_sku'},
            { header: 'Material Name', dataIndex: 'mat_skuname'},
            { header: 'Material Group', dataIndex: 'mat_group'},
            { header: 'Material Category', dataIndex: 'mat_category'},
            { header: 'Material UOM', dataIndex: 'mat_uom'},
            { header: 'Material UPP', dataIndex: 'mat_upp'}
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'ST_mmaterial',
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
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
});