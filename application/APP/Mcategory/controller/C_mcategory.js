    Ext.define('RBM.controller.C_mcategory',{
        extend: 'Ext.app.Controller',
        views: ['GRID_mcategory', 'FRM_mcategory'],
        stores: ['ST_mcategory'],
        refs: [{
            ref: 'FRM_mcategory',
            xtype: 'FRM_mcategory',
            selector: 'FRM_mcategory',
            autoCreate: true
        }],
        init: function(){
            this.control({
                'GRID_mcategory > toolbar > textfield[itemId=searchData]': {
                    specialkey: this.searchData
                },                                        
                'GRID_mcategory' :{
                    itemdblclick: this.onRowdblclick,
                    removeitem: this.deleteItem
                },
                'FRM_mcategory button[action=add]':{
                    click: this.doSaveform
                },
            });
        },
        searchData:function (f,e) {
            var store = this.getST_mcategoryStore();//Ext.getStore('STassetlocation');
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
                var win = this.getFRM_mcategory();
                win.setAction('edit');
                win.setRecordIndex(index);
                win.down('form').getForm().setValues(record.getData());
                console.log('edit');

        },
        deleteItem:function (record) {
            Ext.Msg.confirm('Delete Category', 'Are you sure?', function (button) {
                if (button == 'yes') {
                    this.doProsesCRUD('delete',record);
                }
            }, this);
        },
        doProsesCRUD : function (inAction,record){
            var win = this.getFRM_mcategory();
            var store = this.getST_mcategoryStore();//Ext.getStore('ScontactStore');
            Ext.Ajax.request({
                        url: base_url + 'Mcategory/' +  inAction,
                        method: 'POST',
                        type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response){
                            switch(inAction) {
                                case 'delete':
                                        createAlert('Delete Category', 'Delete Data Success', 'success');
                                        store.load();
                                    break;
                                case 'create' :
                                        createAlert('Insert Category', 'Insert Data Success', 'success');
                                        store.load();
                                    break;
                                case 'update' :
                                        createAlert('Update Category', 'Update Data Success', 'success');
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
                var win = this.getFRM_mcategory();
                var store = this.getST_mcategoryStore();
                var form = win.down('form');
                //var values = form.getValues();
                var values = form.getValues();
                var record = form.getRecord();
                var action = win.getAction();
                var recValue = Ext.create('RBM.model.M_mcategory', values);
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