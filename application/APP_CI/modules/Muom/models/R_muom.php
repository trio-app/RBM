<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class R_muom extends CI_Model {
        
        function load_default($start,$limit,$filter){
            $dtfilter = json_decode($filter,true);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_data.*
                            ',FALSE);
            $this->db->from('m_data');
            $this->db->where("m_data.d_id <>", 0);
            $this->db->where('m_data.m_name','UOM');
            $this->db->like('m_data.d_name',$dtfilter[0]['value']);
            $this->db->like('m_data.d_description',$dtfilter[0]['value']);   
            $this->db->limit($limit,$start);
            $this->db->order_by("m_data.d_id","DESC");
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
        
        function cbolist(){
            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_data.*
                            ',FALSE);
            $this->db->from('m_data');
            $this->db->where('m_data.d_id <>', 0);
            $this->db->like('m_data.m_name','UOM');
            $this->db->order_by("m_data.d_id","DESC");
            $query = $this->db->get();
                            //return $db->last_query();
            $rows = $query->result_array();
            
            return json_encode($rows);
            
        }        
}
