<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mrackbin extends CI_Model {
        
    function updateDT($DTrows){
        $this->load->database();
        $data = array(
            'location_name' => $DTrows['location_name'],
            'rack_name' => $DTrows['rack_name'],
            'rack_description' => $DTrows['rack_description'],
            'sys_update_date' => mdate('%d-%m-%Y %H:%i:%s', time()),
            'sys_update_user' =>  $this->session->userdata('user_login')
        );
        $this->db->where('rack_id', $DTrows['rack_id']);
        $this->db->update('m_rackbin', $data);
    }
}
