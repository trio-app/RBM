<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mlocation extends CI_Model {
        
    function insertDT($DTrows){
        $this->load->database();
        $data = array(
            'd_name' => $DTrows['d_name'],
            'd_description' => $DTrows['d_description'],
            'm_name' => 'Location',
            'sys_create_date' => mdate('%d-%m-%Y %H:%i:%s', time()),
            'sys_create_user' =>  $this->session->userdata('user_login')
        );

        $this->db->insert('m_data', $data);
    }
}
