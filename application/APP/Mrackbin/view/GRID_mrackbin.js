Ext.define('RBM.Mrackbin.view.GRID_mrackbin',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mrackbin',
    store: 'RBM.Mrackbin.store.ST_mrackbin',
    margin: '10 0',
    height: 400,
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
            { header: 'Location Name', dataIndex: 'location_name', flex: 1 },
            { header: 'Rack Bin Name', dataIndex: 'rack_name', flex: 1 },          
            { header: 'Description', dataIndex: 'rack_description', flex: 1 },          
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'RBM.Mrackbin.store.ST_mrackbin',
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