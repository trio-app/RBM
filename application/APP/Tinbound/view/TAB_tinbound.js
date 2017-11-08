Ext.define('RBM.Tinbound.view.TAB_tinbound',{
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
        title: 'Cancel Inbound',
        layout: 'anchor',
        items: [{
                border: 0,
                layout: 'anchor',
                items: [{
                        defaults: {
                            padding: '0 10'
                        },
                        layout: 'hbox',
                        border: 0,
                        flex: 1,
                        items: [{
                                flex: 2,
                                border: 0,
                                items: [{
                                    xtype: 'box',
                                    html: '<p>Pencarian Inbound dengan Status Inbound belum <b>Complete</b> berdasarkan tanggal Transaksi'
                                },{
                                    labelWidth: 200,
                                    width: 500,
                                    xtype: 'datefield',
                                    fieldLabel: 'Pilih tanggal Proses Inbound ',
                                    minValue: Ext.Date.add(new Date(), Ext.Date.DAY, -3),
                                    value: Ext.Date.add(new Date()),
                                    format: 'd-m-Y'
                                }]
                        },{
                            margin: '15',
                            xtype: 'button',
                            text: 'Cancel 1 Document',
                            scale: 'large',
                            icon: base_url + 'system/img/delete.ico'
                        }]
                },{
                }]
        }]
    }]
})