<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mcategory extends CI_Model {
        
    function updateDT($DTrows){
        $this->load->database();
        $data = array(
            'd_name' => $DTrows['d_name'],
            'd_description' => $DTrows['d_description'],
            'sys_update_date' => mdate('%d-%m-%Y %H:%i:%s', time()),
            'sys_update_user' =>  $this->session->userdata('user_login')
        );
        $this->db->where('d_id', $DTrows['d_id']);
        $this->db->update('m_data', $data);
    }
}
