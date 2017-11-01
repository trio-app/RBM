<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class R_mmaterial extends CI_Model {
        
        function load_default($start,$limit,$filter){
            $dtfilter = json_decode($filter,true);
            
            //print_r($dtfilter);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_material.*
                            ',FALSE);
            $this->db->from('m_material');
            $this->db->where('m_material.mat_id <>', 0); 
            $this->db->like('m_material.mat_sapcode', $dtfilter[0]['value']);
            $this->db->or_like('m_material.mat_sapname', $dtfilter[0]['value']);
            $this->db->or_like('m_material.mat_sku', $dtfilter[0]['value']);
            $this->db->or_like('m_material.mat_skuname', $dtfilter[0]['value']);
            $this->db->limit($limit,$start);
            $this->db->order_by("m_material.mat_id","DESC");
            $query = $this->db->get();
                            //return $db->last_query();
            $rows = $query->result_array();


            $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
            $count = $query2->row('hasil');

            $data = array(
                        'TotalRows' => $count,
                            'Rows' => $rows
                         );
            return json_encode($data);   

        }
               
}
