    Ext.define('RBM.controller.C_mlocation',{
        extend: 'Ext.app.Controller',
        views: ['GRID_mlocation', 'FRM_mlocation'],
        stores: ['ST_mlocation'],
        refs: [{
            ref: 'FRM_mlocation',
            xtype: 'FRM_mlocation',
            selector: 'FRM_mlocation',
            autoCreate: true
        }],
        init: function(){
            this.control({
                'GRID_mlocation > toolbar > textfield[itemId=searchData]': {
                    specialkey: this.searchData
                },                                        
                'GRID_mlocation' :{
                    itemdblclick: this.onRowdblclick,
                    removeitem: this.deleteItem
                },
                'FRM_mlocation button[action=add]':{
                    click: this.doSaveform
                },
            });
        },
        searchData:function (f,e) {
            var store = this.getST_mlocationStore();//Ext.getStore('STassetlocation');
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
                var win = this.getFRM_mlocation();
                win.setAction('edit');
                win.setRecordIndex(index);
                win.down('form').getForm().setValues(record.getData());
                console.log('edit');

        },
        deleteItem:function (record) {
            Ext.Msg.confirm('Delete Location', 'Are you sure?', function (button) {
                if (button == 'yes') {
                    this.doProsesCRUD('delete',record);
                }
            }, this);
        },
        doProsesCRUD : function (inAction,record){
            var win = this.getFRM_mlocation();
            var store = this.getST_mlocationStore();//Ext.getStore('ScontactStore');
            Ext.Ajax.request({
                        url: base_url + 'Mlocation/' +  inAction,
                        method: 'POST',
                        type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response){
                            switch(inAction) {
                                case 'delete':
                                        createAlert('Delete Location', 'Delete Data Success', 'success');
                                        store.load();
                                    break;
                                case 'create' :
                                        createAlert('Insert Location', 'Insert Data Success', 'success');
                                        store.load();
                                    break;
                                case 'update' :
                                        createAlert('Update Location', 'Update Data Success', 'success');
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
                var win = this.getFRM_mlocation();
                var store = this.getST_mlocationStore();
                var form = win.down('form');
                //var values = form.getValues();
                var values = form.getValues();
                var record = form.getRecord();
                var action = win.getAction();
                var recValue = Ext.create('RBM.model.M_mlocation', values);
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