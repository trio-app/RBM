<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mmaterial extends CI_Model {
        
    function insertDT($DTrows){
        $this->load->database();
        $data = array(
            'mat_sapcode' => $DTrows['mat_sapcode'],
            'mat_sapname' => $DTrows['mat_sapname'],
            'mat_sku' => $DTrows['mat_sku'],
            'mat_skuname' => $DTrows['mat_skuname'],
            'mat_group' => $DTrows['mat_group'],
            'mat_category' => $DTrows['mat_category'],
            'mat_upp' => $DTrows['mat_upp'],
            'mat_uom' => $DTrows['mat_uom'],
            'sys_create_date' => mdate('%d-%m-%Y %H:%i:%s', time()),
            'sys_create_user' =>  $this->session->userdata('user_login')
        );

        $this->db->insert('m_material', $data);
    }
}
