<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class R_ListOpname extends CI_Model {
    
    function load_defalut($start,$limit,$filter){
        
        $dtfilter = json_decode($filter,TRUE);
                
               $this->load->database();
               
               $this->db->select('SQL_CALC_FOUND_ROWStr_inbound.*, tr_inbound_detail.*
                          ', FALSE);
               $this->db->select('tr_inbound_detail.mat_codesap,tr_inbound_detail.mat_description , tr_inbound_detail.mat_uom , SUM(tr_inbound_detail.mat_qty) AS matqtytotal,COUNT(tr_inbound_detail.mat_barcode) AS matbarcode ');
               
               $this->db->from('tr_inbound_detail');
               
               $this->db->join('tr_inbound','tr_inbound.in_id = tr_inbound_detail.Rin_id','LEFT');
               
               $this->db->where("tr_inbound_detail. mt_out = 0 AND tr_inbound_detail. Rin_id = 0");
               
               $this->db->limit($limit,$start);
               
               $this->db->group_by("tr_inbound_detail.mat_codesap");
               
               $this->db->order_by("tr_inbound_detail.mat_codesap","ASC");
                
               $query = $this->db->get();
               
               $rows = $query->result_array();
               
                        $query2 = $this->db->query('SELECT FOUND_ROWS  AS hasil');
                        $count = $query2->row('hasil');
    
                            $data = array(
                                        'TotalRows' => $count,
                                        'Rows' => $rows
                                    );
                            
                            return json_encode($data);
     }
}
