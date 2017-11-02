<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mrackbin extends CI_Model {
        
    function insertDT($DTrows){
        $this->load->database();
        $data = array(
            'location_name' => $DTrows['location_name'],
            'rack_name' => $DTrows['rack_name'],
            'rack_description' => $DTrows['rack_description'],
            'sys_create_date' => mdate('%d-%m-%Y %H:%i:%s', time()),
            'sys_create_user' =>  $this->session->userdata('user_login')
        );

        $this->db->insert('m_rackbin', $data);
    }
}
