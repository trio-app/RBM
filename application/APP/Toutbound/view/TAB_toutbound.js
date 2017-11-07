Ext.define('RBM.view.TAB_toutbound',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_toutbound',
    frame: true,
    activeTab: 0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'Create New Outbound',
        layout: 'anchor',
        items: [{
                border: 0,
                layout: 'hbox',
                items: [{
                    flex: 1,
                    margin: '10',
                    xtype: 'FRM_toutbound'
                },{
                    flex: 1,
                    xtype: 'image',
                    src: base_url + 'system/img/outbound.png',
                    padding: '10'
                }]
        },{
            xtype: 'GRID_toutbound'
        }]
    }, {
        title: 'Cancel outbound'
    }]
})