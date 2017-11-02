<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mrackbin extends CI_Model {
        
    function deleteDT($DTrows){
        $this->load->database();

        $this->db->where('rack_id', $DTrows['rack_id']);
        $this->db->delete('m_rackbin');
    }
}
