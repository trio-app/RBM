<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mmaterial extends CI_Model {
        
    function deleteDT($DTrows){
        $this->load->database();

        $this->db->where('mat_id', $DTrows['mat_id']);
        $this->db->delete('m_material');
    }
}
