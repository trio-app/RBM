    Ext.define('RBM.Muom.controller.C_muom',{
        extend: 'Ext.app.Controller',
        views: [
            'RBM.Muom.view.GRID_muom',
            'RBM.Muom.view.FRM_muom'
        ],
        stores: [
            'RBM.Muom.store.ST_muom'
        ],
        refs: [{
            ref: 'FRM_muom',
            xtype: 'FRM_muom',
            selector: 'FRM_muom',
            autoCreate: true
        }],
        init: function(){
            this.control({
                'GRID_muom > toolbar > textfield[itemId=searchData]': {
                    specialkey: this.searchData
                },                                        
                'GRID_muom' :{
                    itemdblclick: this.onRowdblclick,
                    removeitem: this.deleteItem
                },
                'FRM_muom button[action=add]':{
                    click: this.doSaveform
                },
            });
        },
        searchData:function (f,e) {
            var store = Ext.getStore('RBM.Muom.store.ST_muom');//this.getST_muomStore();//Ext.getStore('STassetlocation');
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
                var win = this.getFRM_muom();
                win.setAction('edit');
                win.setRecordIndex(index);
                win.down('form').getForm().setValues(record.getData());

        },
        deleteItem:function (record) {
            Ext.Msg.confirm('Delete UOM', 'Are you sure?', function (button) {
                if (button == 'yes') {
                    this.doProsesCRUD('delete',record);
                    //console.log(record.data);
                }
            }, this);
        },
        doProsesCRUD : function (inAction,record){
            var win = this.getFRM_muom();
            var store = Ext.getStore('RBM.Muom.store.ST_muom');//this.getST_muomStore();//Ext.getStore('ScontactStore');
            Ext.Ajax.request({
                        url: base_url + 'Muom/' +  inAction,
                        method: 'POST',
                        type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response){
                            switch(inAction) {
                                case 'delete':
                                        createAlert('Delete UOM', 'Delete Data Success', 'success');
                                        store.load();
                                    break;
                                case 'create' :
                                        createAlert('Insert UOM', 'Insert Data Success', 'success');
                                        store.load();
                                    break;
                                case 'update' :
                                        createAlert('Update UOM', 'Update Data Success', 'success');
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
                var win = this.getFRM_muom();
                var store = Ext.getStore('RBM.Muom.store.ST_muom');//this.getST_muomStore();
                var form = win.down('form');
                //var values = form.getValues();
                var values = form.getValues();
                var record = form.getRecord();
                var action = win.getAction();
                var recValue = Ext.create('RBM.Muom.model.M_muom', values);
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