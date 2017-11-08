    Ext.define('RBM.Mgroup.controller.C_mgroup',{
        extend: 'Ext.app.Controller',
        views: [
            'RBM.Mgroup.view.GRID_mgroup',
            'RBM.Mgroup.view.FRM_mgroup'
        ],
        stores: [
            'RBM.Mgroup.store.ST_mgroup'
        ],
        refs: [{
            ref: 'FRM_mgroup',
            xtype: 'FRM_mgroup',
            selector: 'FRM_mgroup',
            autoCreate: true
        }],
        init: function(){
            this.control({
                'GRID_mgroup > toolbar > textfield[itemId=searchData]': {
                    specialkey: this.searchData
                },                                        
                'GRID_mgroup' :{
                    itemdblclick: this.onRowdblclick,
                    removeitem: this.deleteItem
                },
                'FRM_mgroup button[action=add]':{
                    click: this.doSaveform
                },
            });
        },
        searchData:function (f,e) {
            var store = Ext.getStore('RBM.Mgroup.store.ST_mgroup');//this.getST_mgroupStore();//Ext.getStore('STassetlocation');
            if (e.getKey() == e.ENTER) {
                store.remoteFilter = false;
                store.clearFilter();
                store.remoteFilter = true;
                store.filter([{
                        property:'filtername',
                        anyMatch: true,
                        value   : f.value
                    } ]);
            }
        },
        onRowdblclick: function(me, record, item, index){                            
                var win = this.getFRM_mgroup();
                win.setAction('edit');
                win.setRecordIndex(index);
                win.down('form').getForm().setValues(record.getData());
                console.log('edit');

        },
        deleteItem:function (record) {
            Ext.Msg.confirm('Delete Group', 'Are you sure?', function (button) {
                if (button == 'yes') {
                    this.doProsesCRUD('delete',record);
                }
            }, this);
        },
        doProsesCRUD : function (inAction,record){
            var win = this.getFRM_mgroup();
            var store = Ext.getStore('RBM.Mgroup.store.ST_mgroup');//this.getST_mgroupStore();//Ext.getStore('ScontactStore');
            Ext.Ajax.request({
                        url: base_url + 'Mgroup/' +  inAction,
                        method: 'POST',
                        type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response){
                            switch(inAction) {
                                case 'delete':
                                        createAlert('Delete Group', 'Delete Data Success', 'success');
                                        store.load();
                                    break;
                                case 'create' :
                                        createAlert('Insert Group', 'Insert Data Success', 'success');
                                        store.load();
                                    break;
                                case 'update' :
                                        createAlert('Update Group', 'Update Data Success', 'success');
                                        store.load();
                                    break;
                            }
                            win.down('form').getForm().reset();
                            win.setAction('add');

                        },
                        failure: function(response){
                            //createAlert('Error ' + response.status, response.responseText, 'error');
                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                        }
                    });
        },                        
        doSaveform: function(){
                var win = this.getFRM_mgroup();
                var store = Ext.getStore('RBM.Mgroup.store.ST_mgroup');//this.getST_mgroupStore();
                var form = win.down('form');
                //var values = form.getValues();
                var values = form.getValues();
                var record = form.getRecord();
                var action = win.getAction();
                var recValue = Ext.create('RBM.Mgroup.model.M_mgroup', values);
                console.log(action);

                if(action == 'edit'){
                    if(form.isValid()){
                        this.doProsesCRUD('update',recValue);
                    }
                }else{
                    if(form.isValid()){
                        this.doProsesCRUD('create',recValue);
                    }
                }
        }
    });