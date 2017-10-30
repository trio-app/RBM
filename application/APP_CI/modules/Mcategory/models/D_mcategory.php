<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mcategory extends CI_Model {
        
    function deleteDT($DTrows){
        $this->load->database();

        $this->db->where('d_id', $DTrows['d_id']);
        $this->db->delete('m_data');
    }
}
