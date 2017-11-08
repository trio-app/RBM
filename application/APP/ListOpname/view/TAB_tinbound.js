Ext.define('RBM.view.TAB_tinbound',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_tinbound',
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
        title: 'Create New Inbound',
        layout: 'anchor',
        items: [{
                border: 0,
                layout: 'hbox',
                items: [{
                    flex: 1,
                    margin: '10',
                    xtype: 'FRM_tinbound'
                },{
                    flex: 1,
                    xtype: 'image',
                    src: base_url + 'system/img/inbound.png',
                    padding: '10'
                }]
        },{
            xtype: 'GRID_tinbound'
        }]
    }, {
        title: 'Cancel Inbound'
    }]
})